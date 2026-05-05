'use client';
import Link from 'next/link';
import Image from 'next/image';

import useTheme from '@/contexts/theme_context/useTheme';
import ScrollLink from '../../util/ScrollLink';

const Logo = () => {
  const { isDark } = useTheme();

  return (
    <div className='btn btn-ghost py-6'>
      <ScrollLink href="/">
        <Image 
          src="/logotk.svg" 
          alt="Logo" 
          width={100} height={80}
          className={'transition duration-300 ' + (isDark ? 'invert' : '')}
        />
      </ScrollLink>
    </div>
  )
}

export default Logo