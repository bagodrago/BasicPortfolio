import Image from 'next/image';
import Link from 'next/link';

{/* TODO: Implement project cards */}
const ProjectCard = () => {
  return (
    <div className='card shadow-lg bg-base-300 hover:shadow-2xl w-full'>
      <figure className='h-40 relative'>
        <Image
          src='/marble-bg.jpg'
          alt='Placeholder'
          className='w-full object-cover'
          fill
        />
      </figure>
      <figcaption className='overflow-ellipses text-left text-base-content m-5'>
        <h3 className='text-xl font-semibold mb-2'>
          Test Title Project
        </h3>
        <p className='overflow-hidden max-h-20 hidden md:block text-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, iste. Nulla, delectus esse? Animi ipsum quasi, rem quia culpa fugit obcaecati reprehenderit eum in eaque dolor tenetur nam. Nostrum, nisi!
        </p>
        <div className='mt-2 space-x-1 space-y-1 select-none'>
          <div className={`badge badge-primary hover:brightness-110`}>Test</div>
          <div className={`badge badge-primary hover:brightness-110`}>Test</div>
          <div className={`badge badge-primary hover:brightness-110`}>Test</div>
          <div className={`badge badge-primary hover:brightness-110`}>Test</div>
          <div/>
        </div>
        <Link
          href='#'
          className='text-xs'
        >
          <button className='btn shadow-sm'>
          View the Github page
          </button>
        </Link>
      </figcaption>
    </div>
  )
}

export default ProjectCard