import Link from 'next/link'
import AboutDivider from './AboutDivider'

const About = () => {
  
  return (
    <section id="about" className="about">
      
      <div className='about__layout_wrapper'>
        {/*Background Layer*/}
        <div className='about__bg_wrapper'>
          <div className='about__bg'/>
        </div>

        {/*Gradient Layer*/}
        <div className='about__gradient'/>

        {/*Divider Layer*/}
        <AboutDivider/>

        {/*Card*/}
        <div className="about__card">

          {/*Title*/}
          <div className='my-10 mx-10 lg:mx-50 relative z-20'>
            <h2 className='text-6xl italic font-semibold'>
              Who am I?
            </h2>
            <p className='mt-3'>
              Here's a bit about me...
            </p>
          </div>

          {/*Card Body*/}
          <div className="about__card_body">

            {/*Avatar*/}
            <div className='avatar h-40 w-40'>
              <div className="rounded-full ring-5 ring-primary">
                <img src="/pete.jpg" />
              </div>
            </div>

            {/*Text*/}
            <div className='flex-col space-y-2'>
              <p className='text-lg'>
                Hi! My name is
              </p>
              <h2 className="card-title text-5xl text-white font-semibold">
                David Howe
              </h2>
              <p className='text-xl'>
                I'm a Software Developer and QA Analyst with a Bachelor's in Computer Science from Ontario Tech University. 
                I specialize in object-oriented programming and have several years of hands-on experience building and testing applications. 
                I’ve been coding since middle school, and that long-term curiosity has evolved into a disciplined approach to learning new technologies 
                and solving real-world problems. 

                Recently, I’ve focused on developing React-based applications and applying AGILE methodologies to deliver clean, maintainable code. 
                I’m particularly interested in creating user-focused software while ensuring reliability through thoughtful testing practices.
              </p>

              {/*LinkedIn Button*/}
              <button className="btn">
                <Link href="https://www.linkedin.com/in/david-howe-cs" target="_blank" replace>
                  <i className="devicon-linkedin-plain mr-1"/>
                  Connect with me on LinkedIn
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/*Tech Stack Card*/}
        <div className='about__tech_card'>
          <h2 className='mb-3'>
            My Skills
          </h2>

          {/* TODO: Populate Tech Stack with real skills (possibly with a factory) */}
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

      </div>
      
      
    </section>
  )
}

export default About