import { BaseURL } from './getTodos';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export async function getPhotos(albumId: number = 1) {
  const data = await fetch(`${BaseURL}/albums/${albumId}/photos`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  return data as Array<Photo>;
}

export async function getPhoto(photoId: number) {
  const date = await fetch(`${BaseURL}/photos/${photoId}`, {
    next: { revalidate: 5 },
  }).then((res) => res.json());

  return date as Photo;
}
