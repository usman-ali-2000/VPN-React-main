import React from 'react'
import { Link } from 'react-router-dom'

function LinearBtn({text,loc}) {
  return (
    <Link to={loc} className="bg-linear text-white  rounded-full p-6">{text}</Link>
  )
}

export default LinearBtn