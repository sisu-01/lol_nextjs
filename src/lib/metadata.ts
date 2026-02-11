import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  // image?: string; // 페이지별로 다른 이미지를 쓰고 싶을 때를 대비
}

export function getCustomMetadata({ title, description, path }: MetadataProps): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      // images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      title,
      description,
      // images: image ? [image] : undefined,
    },
  };
}