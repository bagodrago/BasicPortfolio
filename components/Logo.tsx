'use client';
import Link from 'next/link';
import Image from 'next/image';

import useTheme from '@/contexts/useTheme';

const Logo = () => {
  const { isDark } = useTheme();

  return (
    <div className='btn btn-ghost py-6'>
      <Link href="#" onClick={() => {window.scrollTo({
        top: 0,
        behavior: "smooth",
      })}} replace>
        <Image 
          src="/logotk.svg" 
          alt="Logo" 
          width={100} height={80}
          className={'transition duration-300 ' + (isDark ? 'invert' : '')}
        />
      </Link>
    </div>
  )
}

export default Logo