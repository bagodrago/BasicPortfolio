import React from 'react'

const AboutTechStack = () => {
  return (
    <div className='about_tech_stack'>
      <h2 className='mb-3'>
        My Skills
      </h2>

      {/* TODO: Populate Tech Stack with real skills (possibly with a factory) */}
      <ul className='list overflow-scroll'>
        
      </ul>

      <ul className='list overflow-scroll'>
        <p className='text-xs'>Web Tools</p>
        <li className='list-row'>
          <div className='space-x-1 space-y-1'>
            <div className='badge badge-primary'>HTML</div>
            <div className='badge badge-primary'>CSS</div>
            <div className='badge badge-primary'>React</div>
            <div className='badge badge-primary'>NextJS</div>
            <div className='badge badge-primary'>TailwindCSS</div>
            <div className='badge badge-primary'>DaisyUI</div>
            <div className='badge badge-primary'>NodeJS</div>
            <div className='badge badge-primary'>Vercel</div>
            <div className='badge badge-primary'>Lucide</div>
            <div/>

          </div>
        </li>
        <p className='text-xs'>Web Tools</p>
        <li className='list-row'>
          <div className='space-x-1 space-y-1'>
            <div className='badge badge-accent'>HTML</div>
            <div className='badge badge-primary'>CSS</div>
            <div className='badge badge-primary'>React</div>
            <div className='badge badge-primary'>NextJS</div>
            <div className='badge badge-primary'>TailwindCSS</div>
            <div className='badge badge-primary'>DaisyUI</div>
            <div className='badge badge-primary'>NodeJS</div>
            <div className='badge badge-primary'>Vercel</div>
            <div className='badge badge-primary'>Lucide</div>
            <div/>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default AboutTechStack