import React from "react"

function Note(props) {
  return (
    /*Use map to loop though the array and render the notes component*/
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

export default Note
