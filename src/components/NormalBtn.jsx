import React from 'react'
import { Link } from 'react-router-dom'

function NormalBtn({text,loc}) {
  return (

    <Link to={loc} className="shadow-md text-secondary rounded-full p-6 min-w-fit ">{text}</Link>
  )
}

export default NormalBtn