import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '@/lib/getPhotos';

export default async function PhotosPage() {
  const photos = await getPhotos(1);

  return (
    <div>
      <div>PhotosPage</div>
      <div>
        <a href='/photos'>Photos</a>
      </div>
      <ul className='flex flex-wrap w-2/3 gap-3'>
        {photos.map(({ id, thumbnailUrl }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image src={thumbnailUrl} width={150} height={150} alt='' />
          </Link>
        ))}
      </ul>
    </div>
  );
}
