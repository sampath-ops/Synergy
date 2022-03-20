import React from 'react'
import './ContactDetails.css'
const ContactDetails = () => {
  return (
    <section>
     <div className='ContactDetails__container'>
         <form>
       <div className='ContactDetails__input' id='firstname'>
           <label>Firstname</label>
           <input type='text' name='firstname'></input>
       </div>
       <div className='ContactDetails__input' id='lastname'>
           <label>Lastname</label>
           <input type='text' name='Lastname'></input>
       </div>
       <div className='ContactDetails__input' id='phone'>
           <label>Phone </label>
           <input type='text' name='phone'></input>
       </div>
       <div className='ContactDetails__input' id='email'>
           <label>Email  </label>
           <input type='text' name='phone'></input>
       </div>
       <div className='ContactDetails__input' >
           <label>Message </label>
            <textarea type='text' rows='10' cols='30' name='message'></textarea>
       </div>
       <button type='submit'> Send</button>
       </form> </div></section>
    
  )
}

export default ContactDetails