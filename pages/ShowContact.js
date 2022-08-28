import React from 'react'

export default function ShowContact(props) {
  //console.log("Props: " + props.contactName)
  const [contact,setContact] = React.useState({photo:props.contactImg, name:props.contactName, nameclass:"name readOnly", phone:props.contactPhone, phoneclass1:"phone on", phoneclass2:"email off", email:props.contactEmail, emailclass1:"email on", emailclass2:"email off", editDisabled:true,readwrite:"Edit"})
 
  function handleEdit(event) {
    event.preventDefault()
    //console.log("Edit Clicked "+ event.target.name + " " + contact.email)
    if (event.target.innerHTML == "Edit")
     // return (
        setContact(prevContact => ({
          ...prevContact,
        nameclass:"name readWrite",
        phoneclass1: "phone readOnly off",
        phoneclass2: "phone readWrite on",
        emailclass1: "email readOnly off",
        emailclass2: "email readWrite on",
        editDisabled: false,
        [event.target.name]: "Save"
        }))
     // )
    else
     // return (
        setContact(prevContact => ({
          ...prevContact,
        nameclass:"name readOnly",
        phoneclass1: "phone readOnly on",
        phoneclass2: "phone readWrite off", 
        emailclass1: "email readOnly on",
        emailclass2: "email readWrite off",        
        editDisabled: true,
        [event.target.name]: "Edit"
        }))
    //  )
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log("Submitted - "+event.target)
    console.log(event.target.name)
  }

  function handleChange(event) {
    event.preventDefault()
    //console.log("handleChange - "+event.target.name+ " is "+event.target.value)
    const {name, value} = event.target
    setContact(prevContact => ({
        ...prevContact,
        [name]: value
    }))
  }

    return(
      <div>
      <div className="photo-folder">
        <img className="photo" src={contact.photo} />
      </div>
      <input 
        type="text"
        className={contact.nameclass}
        disabled={contact.editDisabled}
        name="name"
        value={contact.name}
        onChange={handleChange}
      />
      
      <div className="contact-info">
        <img className="icon" src="./phone-icon.png" />
        <a href= {`tel: ${contact.phone}`} name="phone" className= {contact.phoneclass1}>{contact.phone}</a>
        <input 
        type="text"
        className={contact.phoneclass2}
        disabled={contact.editDisabled}
        name="phone"
        value={contact.phone}
        onChange={handleChange}
      />
      </div>
      <div className="contact-info">
        <img className="icon" src="./mail-icon.png" />
        <a href= {`mailto: ${contact.email}`} name="email" className= {contact.emailclass1}>{contact.email}</a>

        <input 
        type="text"
        className={contact.emailclass2}
        disabled={contact.editDisabled}
        name="email"
        value={contact.email}
        onChange={handleChange}
      />

      </div>
      <button className='button' name="readwrite" onClick={handleEdit}>{contact.readwrite}</button>

      </div>
      )
  } 

