import type { ImageMetadata } from 'astro';

export async function imagePreview(slug: string) {
  const imagePath = `/src/assets/${slug}-preview.png`;
  const images = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/*.{jpeg,jpg,png,gif}',
  );
  if (!images[imagePath])
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`,
    );
  return images[imagePath]();
}
