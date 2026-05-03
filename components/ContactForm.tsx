"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck, CircleX } from 'lucide-react';

import { formSchema, ContactFormData } from '@/lib/formSchema';

const ContactForm = () => {

  // * React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  });

  // * States for Submission Alert
  const [toast, setToast] = useState<{type: 'Success'|'Failure'; message: string} | null>(null);
  const [toastVis, setToastVis] = useState(false);

  const showToast = (type: 'Success'|'Failure', message: string) => {
    setToast({type, message});
    setToastVis(true);

    setTimeout(() => setToastVis(false), 3500);
    setTimeout(() => setToast(null), 4000);
  }

  // * Submit Handler
  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error();

      reset();
      showToast("Success", "Sent successfully!");
    } catch (e) {
      showToast("Failure", `Something went wrong. Please try again.`)
    }
  }

  // * Variables
  const MAX = 750; // Maximum message length
  const messageLength = watch('message')?.length ?? 0;

  const counterColor =
  messageLength > MAX * 0.9 ? 'text-error' :
  messageLength > MAX * 0.75 ? 'text-warning' :
  'text-base-content/40'; // Adjust character counter color by messageLength

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='card contact_form' noValidate>
      <div className='card-body mt-[-10]'>
        <fieldset className='fieldset w-full'>

          {/*Name*/}
          <label className='label'>Name</label>
          <input 
            id="name" 
            type="text" 
            className={`input w-full ${!errors.name ? '' : 'textarea-error'}`} 
            placeholder='John Doe' 
            {...register('name')}
          />
          {errors.name && <label role="alert" className='label floating-label text-error text-xs'>{errors.name.message}</label>}

          {/*Email*/}
          <label className='label mt-2'>Email</label>
          <input 
            id="email" 
            type="email" 
            className={`input w-full ${!errors.email ? '' : 'textarea-error'}`} 
            placeholder='example@email.com' 
            {...register('email')}
          />
          {errors.email && <label role="alert" className='label floating-label text-error text-xs'>{errors.email.message}</label>}  

          {/*Message*/}
          <label className='label mt-2'>Message</label>
          <div className='relative'>
            <textarea 
              id="message"
              className={`textarea w-full h-[19dvh] resize-none pb-6 ${!errors.message ? 'textarea' : 'textarea-error'}`}
              placeholder='Write your message here...'
              {...register('message')}
            />
            <span className={`contact_form__counter ${counterColor}`}>
              {MAX - messageLength}
            </span>
          </div>
          {errors.message && <label role="alert" className='label text-error text-xs'>{errors.message.message}</label>} 
          
          {/*Submit*/}
          <button 
            type="submit" 
            className="btn" 
            disabled={!isDirty || !isValid || isSubmitting}
          >
            {!isSubmitting ? 'Send Message' : <div className='loading loading-spinner loading-sm'/>}
          </button>

        </fieldset>
      </div>

      {/*Submission Alert Toast*/}
      {toast && 
        <div className='toast toast-center toast-bottom z-50 text-lg'>
          <div className={`
            alert transition-opacity duration-300
            ${toast.type === "Success" ? 'alert-success' : 'alert-error'} 
            ${toastVis ? 'opacity-100' : 'opacity-0'}
          `}>
            {toast.type === "Success" ? <CircleCheck/> : <CircleX/>}
            {toast.message}
          </div>
        </div>
      }
    </form>
  )
}

export default ContactForm