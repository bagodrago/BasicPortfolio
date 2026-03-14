import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-md'>
      <div className='navbar-start'>

        {/*Logo Button*/}
        <div className='btn btn-ghost'>
          <Link href="#">
            <Image 
              className='dark:invert aspect-auto'
              src="/logotk.svg" 
              alt="David Howe" 
              width={100} height={80} 
            />
          </Link>
        </div>
      </div>

      <div className='navbar-end'>
        {/*Links*/}
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li><Link href="#about"   >About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact" >Contact</Link></li>
        </ul>

        {/*Dropdown Menu*/}
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <Menu />
          </div>
          <ul
            tabIndex={-1}
            className='menu menu-sm dropdown-content rounded-box navbar__dropdown_list'
          >
            <li><Link href="#about"   >About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact" >Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar