import React from 'react'
import './Contact.css'
import ContactDetails from './ContactDetails'

const Contact = () => {
  return (
    <div className='Contact'>
       <div className='Contact__header'>
       <h1>Contact us</h1>
        <p>Any question or remember ? Just write us a Message</p>
       </div>
       
       <div className='Contact__container'>
           <div className='Contact__information'>
               <h1>Contact Information</h1>
               <a > Fill up the form and our  team will get back to
                   <br/>  you within 24 hours</a>
           </div>
           <div className='Contact__social'>
               <i className='phone volume icon'> </i><a>245325234</a><br/>
               <i className='envelope icon'></i><a>Sample@gmai.com</a><br/>
               <i className='location arrow icon'></i><a>karuppr salem</a><br/>
  </div>
   
  <div className='Contact__symbols'>
      <i className='facebook f icon'></i>
      <i className='twitter icon'></i>
      <i className='instagram icon'></i>
      <i className='linkedin icon'></i>
    
  </div>

       </div>
       <ContactDetails/>
    </div>
  )
}

export default Contact