import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'


const Excuse = (props) => {
  console.log(props)
  const { text, description, icon } = props.pathContext
  return (
    <div className="text-center">
      <div className="excuse-top">
        <FontAwesome
          name={icon}
          size='3x'
        />
        <h1 className="excuse-text">{text}</h1>
        <p className="excuse-description">{description}</p>
      </div>
      <hr width="80%"/>
    </div>
  )
}

export default Excuse
