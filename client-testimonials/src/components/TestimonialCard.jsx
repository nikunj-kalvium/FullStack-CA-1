import React from 'react'

function TestimonialCard(props) {
  return (<>
    <div>Customer Name : {props.name1}</div>
    <div>Review text : {props.review1}</div>
    <div>Customer Name : {props.name2}</div>
    <div>Review text : {props.review2}</div>
    </>
  )
}

export default TestimonialCard