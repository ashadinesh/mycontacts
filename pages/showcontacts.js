import React from 'react'
//import contacts from '../data/contacts.json'
//import EditContact from './editcontact'
import ShowContact from './ShowContact'

export default function ShowContacts(props) {
  console.log(props)
  return (
    props.categoryContacts.map(contact => {
    // console.log(contact.id)
     return (
       <div key = {contact.id} className="contact-card">
       <ShowContact
         contactID = {contact.id}
         contactImg = {contact.contactImg}
         contactName = {contact.contactName}
         contactPhone = {contact.contactPhone}
         contactEmail = {contact.contactEmail}
         />
         </div>   
     )
    }))
}

/*export default function ShowContacts() {

  const [concat,setContact] = React.useState({})
 

  function handleEdit(event) {
    console.log("Edit Clicked")
    return (
      <EditContact />
    )
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log("Submitted - "+event.target)
    console.log(event.target.name)
  }

  function handleChange(event) {
    console.log("handleChange - "+event.target.name+ " is "+event.target.value)
    const {name, value} = event.target
    setContact(prevContact => ({
        ...prevContact,
        [name]: value
    }))
}

  console.log("Show Contacts")
return(
  contacts.map(contact => (
    <div name={contact.id} key={contact.id} className="contact-card">
      <form className="form" onSubmit={handleSubmit}>
    <div className="photo-folder">
      <img className="photo" src={contact.img} />
    </div>
    <h3 className="name">{contact.name}</h3>
    <div className="contact-info">
      <img className="icon" src="./phone-icon.png" />
      <input 
        type="text"
        className="phone readOnly"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
      />
    </div>
    <div className="contact-info">
      <img className="icon" src="./mail-icon.png" />
      <a href= {`mailto: ${contact.email}`} className="email">{contact.email}</a>
    </div>
    <button className='button'>Edit</button>
    </form>
  </div>
  )))
} */

