import { type CollectionEntry } from 'astro:content';

export function getProjectUrl(project: CollectionEntry<'projects'>) {
  const projectUrlParts = ['/projects'];
  if (project.data.protected) {
    projectUrlParts.push('protected');
  }
  projectUrlParts.push(project.slug);
  return projectUrlParts.join('/');
}
