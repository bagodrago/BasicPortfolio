import Link from 'next/link'

const About = () => {
  
  return (
    <section id="about" className="about">

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
      <div className="card card-xl about__card">
        
        {/*Background Layer*/}
        <div className='about__bg_wrapper'>
          <div className='about__bg'/>
        </div>

        {/*Gradient Layer*/}
        <div className='about__gradient'/>

        {/*Card Body*/}
        <div className="card-body about__card_body">

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
            {/* TODO: Rewrite about */}

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

      {/* TODO: Add more to section? Tech stack maybe? */}
      
    </section>
  )
}

export default About