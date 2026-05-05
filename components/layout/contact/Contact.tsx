import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className='contact'>
      
      {/*Background Layer*/}
      <div 
        className="my-bg z-0"
        style={{backgroundImage: "url('/marble-bg.jpg')"}}
      />

      {/*Gradient Layer*/}
      <div
        className='contact__gradient'
      />

      {/*Text*/}
      <div className='max-w-2xl mb-10 z-10 text-white relative'>
        <h2 className='text-4xl font-bold'>
          Let's get in touch!
        </h2>
        <p  className='mt-3 font-semibold'>
          Have questions, a project in mind, or want to connect? 
          Fill in the form below with your information 
          and I'll be in touch with you as soon as possible!
        </p>
      </div>

      {/*Form*/}
      <ContactForm/>

      {/*Footer*/}
      <div className='footer footer-horizontal footer-center contact__footer'>
        <aside>
          © 2026 David Howe. All rights reserved.
        </aside>
      </div>

    </section>
  )
}

export default Contact