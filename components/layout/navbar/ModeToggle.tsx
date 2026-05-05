'use client';
import useTheme from '@/contexts/theme_context/useTheme';
import { Sun, Moon } from 'lucide-react';

const ModeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <label className='toggle text-base-content'>
      <input type='checkbox' value='dark' className='theme-controller'
        onChange={()=>{setIsDark(!isDark)}}
      />
      <Sun  stroke="currentColor" className='h-4.5 w-4.5'/>
      <Moon stroke="currentColor" className='h-4.5 w-4.5'/>
    </label>
  )
}

export default ModeToggle