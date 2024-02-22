import { getCollection } from 'astro:content';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(
  async ({ cookies, request, redirect }, next) => {
    console.log('Running middleware');
    const passwordCookie = cookies.get('PASSWORD');
    const SECRET_PASSWORD = import.meta.env.PROTECTED_ARTICLE_PASSWORD;
    const pathname = new URL(request.url).pathname;
    if (!pathname.includes('projects/')) {
      return next();
    }
    console.log('On project page');
    const projects = await getCollection('projects');
    const [, , projectSlug] = pathname.split('/');
    console.log('Project is:', projectSlug);
    const project = projects.find((p) => p.slug === projectSlug);
    console.log('Project details:', project);
    if (project?.data?.protected && passwordCookie?.value !== SECRET_PASSWORD) {
      const params = new URLSearchParams();
      params.append('source', new URL(request.url).pathname);
      if (passwordCookie?.value) {
        params.append('wrong', 'true');
      }
      const path = ['/login', params.toString()].join('?');
      return redirect(path);
    }
    return next();
  },
);
