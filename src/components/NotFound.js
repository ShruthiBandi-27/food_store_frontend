import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = ({message, linkRoute, linkText}) => {
  return (
    <div className='notFound_container'>
        {message}
        <Link to={linkRoute}>{linkText}</Link>
    </div>
  )
}

NotFound.defaultProps =  {
    message: 'Nothing Found!',
    linkRoute: '/',
    linkText: 'Go To Home Page',
}

export default NotFound