import React from 'react'

const About = () => {
  // TODO: Finish implementation of About component
  return (
    <section id="about" className="min-h-screen flex-1 relative overflow-hidden">
      {/*Background Image*/}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110 saturate-90 brightness-80"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />

      <div className="card card-xl card-side m-20 bg-base-100">
      <figure className="max-w-70">
        <img src={"/2023.png"}/>
      </figure>

      <div className="card-body text-left text-base-content">
        <h2 className="card-title text-3xl">
          About Me
        </h2>
        <p>
          Hi! My name is David Howe!<br/>I'm an aspiring Software Developer/QA Analyst who recently graduated from Ontario Tech University. 
          I have a passion for AGILE development strategies and object-oriented programming.
          I've been coding since middle school and that drive to learn has continued to fuel my career through personal study.
        </p>
      </div>
    </div>
      
    </section>
  )
}

export default About