"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, ContactFormData } from '@/lib/formSchema';

const ContactForm = () => {

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

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      reset();
      // TODO: Make toast with submission confirmed

      const resData = await res.json;
      console.log(resData);
    } catch (e) {
      console.log(e);
    }
  }

  const MAX = 750;
  const messageLength = watch('message')?.length ?? 0;

  const counterColor =
  messageLength > MAX * 0.9 ? 'text-error' :
  messageLength > MAX * 0.75 ? 'text-warning' :
  'text-base-content/40';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='card contact_form' noValidate>
      <div className='card-body mt-[-10]'>
        <fieldset className='fieldset w-full'>

          {/*Name*/}
          <label className='label'>Name</label>
          <div>
            <input 
              id="name" 
              type="text" 
              className={`input w-full ${!errors.name ? '' : 'textarea-error'}`} 
              placeholder='John Doe' 
              {...register('name')}
            />
          </div>
          {errors.name && <label role="alert" className='label floating-label text-error text-xs'>{errors.name.message}</label>}

          {/*Email*/}
          <label className='label mt-2'>Email</label>
          <div>
            <input 
              id="email" 
              type="email" 
              className={`input w-full ${!errors.email ? '' : 'textarea-error'}`} 
              placeholder='example@email.com' 
              {...register('email')}
            />
          </div>
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
    </form>
  )
}

export default ContactForm