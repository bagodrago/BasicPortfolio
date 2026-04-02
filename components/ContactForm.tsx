"use client";
import { useState } from 'react';

const ContactForm = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    const data = await res.json;
    console.log(data);
  }

  // TODO: Make form bulletproof
  return (
    <form onSubmit={handleSubmit} className='card contact_form'>
      <div className='card-body mt-[-10]'>
        <fieldset className='fieldset w-full'>

          <label className='label'>Name</label>
          <input type="text" onChange={handleChange} className='input w-full mb-2' placeholder='John Doe'/>

          <label className='label'>Email</label>
          <input type="text" onChange={handleChange} className='input w-full mb-2' placeholder='example@email.com'/>

          <label className='label'>Message</label>
          <textarea onChange={handleChange} className='textarea w-full h-60' placeholder=''/>
          
          <button type="submit" className="btn">
            Send Message
          </button>

        </fieldset>
      </div>
    </form>
  )
}

export default ContactForm