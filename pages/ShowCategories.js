/*import '../styles/globals.css'
import ShowCategory from './ShowCategory'

import React from "react"

export default function ShowCategories(prop) {
  return (
    prop.categories.map(category => {
 // console.log(contact.id)
  return (
    <div className="categories">
    <ShowCategory
      categoryId = {category.categoryId}
      categoryName = {category.categoryName}
      />
      </div>
  )}))
} */

import categories from '../data/contacts.json'
import React from "react"

export default function ShowCategories(prop) {
    console.log("here "+ prop)
    prop.categories.map(category => {
         console.log(contact.id)
    })
 /* const [categoriesArray, setcategoriesArray] = React.useState(props.categoriesArray.map(category => category.categoryName))

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
    )*/
}