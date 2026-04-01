import React from 'react'

// TODO: Implement Contact
const Contact = () => {
  return (
    <section id="contact" className='bg-base-100 text-center min-h-screen relative overflow-hidden'>
      {/*Background Layer*/}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110 saturate-90 brightness-80 z-0"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />
      
      {/*Text*/}
      <div className='mx-20 my-10 z-10 text-white relative'>
        <h2 className='text-4xl font-semibold'>
          Let's get in touch!
        </h2>
        <p  className='mt-3'>
          Have questions, a project in mind, or want to connect? 
          Fill in the form below with your information 
          and I'll be in touch with you as soon as possible!
        </p>
      </div>

      {/* TODO: Implement card for form */}
      
    </section>
  )
}

export default Contact