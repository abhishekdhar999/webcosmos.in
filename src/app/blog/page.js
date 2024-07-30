import { getSortedPostsData } from '../../lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allPostsData.map(({ id, date, title, description, image }) => (
            <a key={id} href={`/blog/${id}`} className='translate-none rotate-0 scale-100 opacity-100'>
          <div className="aspect-video top-0 left-0 w-full h-full object-cover">
            <img
              src={image} alt={title}
              className="rounded-md z-1 block max-w-full aspect-ratio-[1920/1080] overflow-clip-margin-content overflow-clip"
            />
            <h3 className="flex gap-2 text-xl font-normal leading-5 m-0 my-4 mx-0 text-heading-white">{title}</h3>
          </div></a>
        ))}
      </div>
    </div>
  );
}
