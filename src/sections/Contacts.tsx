import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contacts() {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'service_js71iq4',
        'template_k5qmomj',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        '0vdALl7kDGbQSdDdW'
      )
      setLoading(false)
      alert('Your message has been sent.')
      setForm({
        email: '',
        message: '',
        name: '',
      })
    } catch (err) {
      console.log(err)
      alert('something went wrong')
      setLoading(false)
    }
  }

  return (
    <section className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img
          src='/assets/terminal.png'
          alt='terminal background'
          className='absolute inset-0 min-h-screen hidden sm:block'
        />
        <div className='contact-container'>
          <h3 className='head-text'>Let's talk</h3>
          <p className='text-lg text-white-600 mt-3'>
            Whether you're looking to build a new website / mobile application
            or improve your existing platform, I'm here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'
          >
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='John Doe'
              />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='text'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='johndoe@gmail.com'
              />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Your message</span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='field-input'
                placeholder="Hi, I'm interested in..."
              />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src='/assets/arrow-up.png'
                alt='arrow-up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
