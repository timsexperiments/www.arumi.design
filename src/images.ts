export function imagePreview(slug: string) {
  return import(`./assets/${slug}-preview.png`);
}
