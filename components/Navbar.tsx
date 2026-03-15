import Link from 'next/link';
import { Menu, Info } from 'lucide-react'

import ModeToggle from './ModeToggle';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100 shadow-md/20 shadow-base-content'>
      <div className='navbar-start space-x-3'>
        {/*Logo Button*/}
        <Logo />

        {/*Looking for Work badge*/}
        <Link href="#contact">
          <div className='badge badge-soft badge-accent outline-1 outline-accent/50 min-w-40'>
            <Info size={14}/>
            Looking for Work
          </div>
        </Link>

      </div>

      <div className='navbar-end space-x-3'>
        {/*Night Mode Toggle*/}
        <ModeToggle />
        
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
            className='menu menu-md dropdown-content rounded-box navbar__dropdown_list'
          >
            <li><Link href="#about"   >About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact" >Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar