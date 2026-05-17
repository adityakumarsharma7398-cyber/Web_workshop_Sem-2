import React from 'react'

function Props(props){
    return(
        <>
        <div style={{display:'flex'}}></div>
        <h1>{props.name}</h1>
         <h2>{props.rollno}</h2>
          <h3>{props.course}</h3>
          </>
    )
}

export default Props
