import React from 'react'

export default function ShowCategory(props) {
   // console.log(props)
      return(
      <div>
      <button className='category' name={props.categoryId}>{props.categoryName}</button>
      </div>
      )
  } 

