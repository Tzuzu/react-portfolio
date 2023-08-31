import React, { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({ name:'', email:'', message:'' })
  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }
  return <form onSubmit={ handleSubmit }>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Your Name</label>
        <input type="text" name='name' className="form-control" placeholder="Your name here" defaultValue={formState.name} onChange={ handleChange }/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Your Email</label>
        <input type="email" name='email' className="form-control" placeholder="youremailhere@example.com" defaultValue={formState.email} onChange={ handleChange }/>
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea name="message" className="form-control" placeholder="Write what you would like here!" defaultValue={formState.message} onChange={ handleChange }rows="3"></textarea>
    </div>
    <button type='submit' className='btn btn-primary'>Submit</button>
  </form>
}

export default Contact