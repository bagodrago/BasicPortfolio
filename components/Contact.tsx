import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className='contact'>
      
      {/*Background Layer*/}
      <div 
        className="my-bg z-0"
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

      {/*Form*/}
      <ContactForm/>

      {/* TODO: Add footer */}
      
    </section>
  )
}

export default Contact