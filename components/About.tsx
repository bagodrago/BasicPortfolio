import Link from 'next/link'

const About = () => {
  // TODO: Finish implementation of About component
  return (
    <section id="about" className="bg-base-100 flex-1 relative overflow-hidden pb-20">

      {/*Title*/}
      <div className='my-10 mx-10 lg:mx-50'>
        <h2 className='text-4xl italic font-semibold'>
          Who am I?
        </h2>
        <p className='mt-3'>
          Here's a bit about me...
        </p>
      </div>

      {/* TODO: Make card adjust to large format with bigger text and icon */}
      
      {/*Card*/}
      <div className="card card-xl mx-20 bg-primary text-primary-content flex-row overflow-hidden relative shadow-lg max-w-250">
        
        {/*Background Layer*/}
        <div className='absolute inset-0 z-0 pointer-events-none bg-primary'>
          <div className='
            h-full 
            w-full 
            bg-[url(/marble-bg.jpg)] 
            bg-cover
            bg-center
            grayscale
            mix-blend-hard-light
            opacity-70
          '/>
        </div>

        {/*Gradient Layer*/}
        <div className='
          absolute inset-0 z-10 pointer-events-none
          md:bg-linear-to-l bg-linear-to-t 
          from-primary to-transparent from-70% to-90%
        '/>

        {/*Card Body*/}
        <div className="card-body text-left z-20 flex-col md:flex-row space-x-5 items-center">

          {/*Avatar*/}
          <div className='flex items-center'>
            <div className='avatar h-40 w-40'>
              <div className="rounded-full ring-5 ring-primary">
                <img src="/pete.jpg" />
              </div>
            </div>
          </div>

          {/*Text*/}
          <div className='flex-col space-y-2'>
            <p>
              Hi! My name is
            </p>
            <h2 className="card-title text-5xl text-white font-semibold">
              David Howe
            </h2>
            <p>
              I'm an aspiring Software Developer/QA Analyst who recently graduated from Ontario Tech University. 
              I have years of hands-on experience working with object-oriented languages and a passion for AGILE development strategies.
              I've been coding things since middle school and that drive to learn has continued to fuel my career through personal study ever since.
              I've also recently taken a strong interest in React-based websites and application.
            </p>

            {/*LinkedIn Button*/}
            <div className='mt-5'>
              <div className="btn bg-orange-400 text-white hover:bg-accent hover:text-accent-content font-bold">
                <Link href="https://www.linkedin.com/in/david-howe-cs" target="_blank" replace>
                  <i className="devicon-linkedin-plain mr-1"/>
                  Connect with me on LinkedIn
                </Link>
              </div>
            </div>

          </div>
          
        </div>
    </div>
      
    </section>
  )
}

export default About