import React from 'react'
import EditContact from './EditContact'

export default function Contact(props) {
  //console.log("Show Contact - "+props.contactID)

  const [formData, setFormData] = React.useState({
      id: props.contactID,
      contactName: props.contactName,        
      contactImg: props.contactImg,
      contactPhone: props.contactPhone,
      contactEmail: props.contactEmail
    })


      function handleChange(event) {
        console.log("handleChange 1 - "+event.target.name+ " : "+event.target.value)
        setFormData(prevFormData => {
          console.log(prevFormData)
          return {
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
  } 

 /* function handleSubmit(event) {
    event.preventDefault()
    console.log("Submitted - "+event.target)
    console.log(event.target)
    return (<EditContact 
      contactID = {event.target.contactID}
      contactImg = {event.target.contactImg}
      contactName = {event.target.contactName}
      contactPhone = {event.target.contactPhone}
      contactEmail = {event.target.contactEmail}
    />)
  } */
  function handleSubmit(event) {
    //event.preventDefault()
    console.log("Submitted - "+event.target)
    console.log(event.target)
    return(
    <EditContact />
    )
  }

  return(
    <div key={props.contactID}>
    <form className="form" Name="form" onSubmit={handleSubmit}>
    <div className="photo-folder">
      <img className="photo" src={props.contactImg} />
    </div>
    <input 
      type="text" 
      placeholder="Name"
      className="name"
      name="contactName"
      onChange={handleChange}
      value={props.contactName}
  />
    <div className="contact-info">
      <img className="icon" src="./phone-icon.png" />
      <p className="phone readOnly" name="contactPhone">{props.contactPhone} </p>
    </div>
    <div className="contact-info">
      <img className="icon" src="./mail-icon.png" />
      <a href= {`mailto: ${props.contactEmail}`} name="contactEmail" className="email">{props.contactEmail}</a>
    </div>
    <button className='button'>Edit</button>
    </form>
    </div>
) 

/*return(
<div className="contact-card">
<form className="form" onSubmit={handleSubmit}>
  <div className="photo-folder">
    <img className="photo" src={formData.photo} />
  </div>
  <input 
      type="text" 
      placeholder="Name"
      className="name"
      name="name"
      onChange={handleChange}
      value={formData.name}
  />

  <div className="contact-info">
    <img className="icon" src="./phone-icon.png" />
    <input 
      type="text"
      className="phone readOnly"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
    />
  </div>
  <div className="contact-info">
    <img className="icon" src="./mail-icon.png" />
    <input 
        type="email" 
        placeholder="Email address"
        className="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
    />
  </div>
  <button className='button'>Edit</button>
</form>
</div>

  )*/
} 

