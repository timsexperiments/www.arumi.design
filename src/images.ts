import type { ImageMetadata } from 'astro';

export async function imagePreview(slug: string) {
  const imagePath = `/src/assets/preview/${slug}.webp`;
  const images = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/preview/*.{jpeg,jpg,png,webp,gif}',
  );
  if (!images[imagePath]) {
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/preview/*.{jpeg,jpg,png,webp,gif}"`,
    );
  }
  return images[imagePath]();
}

export async function imageHero(slug: string) {
  const imagePath = `/src/assets/hero/${slug}.webp`;
  const images = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/hero/*.{jpeg,jpg,png,webp,gif}',
  );
  if (!images[imagePath]) {
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/assets/hero/*.{jpeg,jpg,png,webp,gif}"`,
    );
  }
  return images[imagePath]();
}
