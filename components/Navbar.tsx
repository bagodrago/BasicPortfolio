import Link from 'next/link';
import { Menu, Info } from 'lucide-react'

import ModeToggle from './ModeToggle';
import Logo from './Logo';
import ScrollLink from './ScrollLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-start space-x-3'>
        {/*Logo Button*/}
        <Logo />

        {/*Looking for Work badge*/}
        <ScrollLink href="contact">
          <div className='badge badge-soft badge-accent outline-1 outline-accent/50 min-w-40 select-none cursor-pointer'>
            <Info size={14}/>
            Looking for Work
          </div>
        </ScrollLink>

      </div>

      <div className='navbar-end space-x-3'>
        {/*Night Mode Toggle*/}
        <ModeToggle />
        
        {/*Links*/}
        <ul className='menu menu-horizontal px-1 hidden lg:flex'>
          <li><ScrollLink href='about'    >About</ScrollLink></li>
          <li><ScrollLink href='projects' >Projects</ScrollLink></li>
          <li><ScrollLink href='contact'  >Contact</ScrollLink></li>
        </ul>

        {/*Dropdown Menu*/}
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <Menu />
          </div>
          <ul
            tabIndex={-1}
            className='menu menu-md dropdown-content navbar__dropdown_list'
          >
            <li><ScrollLink href='about'    >About</ScrollLink></li>
            <li><ScrollLink href='projects' >Projects</ScrollLink></li>
            <li><ScrollLink href='contact'  >Contact</ScrollLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar