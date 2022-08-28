import '../styles/globals.css'
import categories from '../data/contacts.json'
import ShowCategory from './ShowCategory'
import ShowContact from './ShowContact'
import ShowContacts from './showcontacts'
import ShowCategories from './ShowCategories'

import React from "react"

/*function MyApp() {
  const [categoriesArray, setcategoriesArray] = React.useState(categories.map(category => category.categoryName))

  function addItem() {
      setcategoriesArray(prevState => {
      //console.log(prevState.length)
          return [...prevState, `category ${prevState.length + 1}`]
      })
  }

  function showcontacts()
  {
    <ShowContacts
        categoryId = {category.categoryId}
        categoryContacts = {category.contacts}
        />
  }
  //console.log(categoriesArray)
  const categoriesElements = categoriesArray.map(category => <button className='category' key={category}>{category}</button>)
  
  //console.log(categoriesElements)
  return (
      <div className="categories">
          {categoriesElements}
          <button className='category' onClick={addItem}>Add Category</button>
      </div>
  )
} */

function MyApp() {
  return (
    categories.map(category => {
 // console.log(contact.id)
  return (
    <div key = {category.categoryId} className="myContacts">
    <div className="categories">
    <ShowCategory
      categoryId = {category.categoryId}
      categoryName = {category.categoryName}
      />
      </div>
      <div className='contacts'>
      <ShowContacts
        categoryId = {category.categoryId}
        categoryContacts = {category.contacts}
        />
      </div>
    </div>
  )}))
} 


/*function MyApp() {
  return (
    categories.map(category => {
 // console.log(contact.id)
  return (
    <div key = {category.categoryId} className="categories">
    <ShowCategory
      categoryId = {category.categoryId}
      categoryName = {category.categoryName}
      />
      </div>   
  )
 }))
} */


/*        <div className="myContacts">
          <div key={category.key} className='categories'>
            <button className='category' name={category.key}>{category.category}</button>
          </div>
          <div className='contacts'>
            
          </div>
        </div>
        */

/*function MyApp() {
  const [categoriesArray, setcategoriesArray] = React.useState(categories.map(category => category.categoryName))

  function addItem() {
      setcategoriesArray(prevState => {
      //console.log(prevState.length)
          return [...prevState, `category ${prevState.length + 1}`]
      })
  }
  //console.log(categoriesArray)
  const categoriesElements = categoriesArray.map(category => <button className='category' key={category}>{category}</button>)
  
  //console.log(categoriesElements)
  return (
      <div>
          <button onClick={addItem}>Add Category</button>
          {categoriesElements}
      </div>
  )
} */
export default MyApp
