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
    <div onSubmit={handleSubmit} className='card bg-base-100 relative shadow-2xl mx-10 max-w-4xl'>
      <div className='card-body mt-[-10]'>
        <fieldset className='fieldset w-full'>

          <label className='label'>Name</label>
          <input type="text" onChange={handleChange} className='input w-full mb-2' placeholder='John Doe'/>

          <label className='label'>Email</label>
          <input type="text" onChange={handleChange} className='input w-full mb-2' placeholder='example@email.com'/>

          <label className='label'>Message</label>
          <textarea onChange={handleChange} className='textarea w-full' placeholder=''/>
          
          <button type="submit" className="enabled btn bg-orange-400 text-white hover:bg-accent hover:text-accent-content font-bold mt-5 peer-invalid:disabled peer-placeholder-shown:disabled">
            Send Message
          </button>

        </fieldset>
      </div>
    </div>
  )
}

export default ContactForm