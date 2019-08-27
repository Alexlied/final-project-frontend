import React from 'react'
import { Link } from 'react-router-dom'

export default ({ logout }) => {

  return (
    <React.Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/assignments/ungraded'>Ungraded Assignments</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/assignments/graded'>Graded Assignments</Link>
      </li>
      <li className='nav-item'>
        <button
          className='btn btn-link'
          onClick={logout}>
          Logout
        </button>
      </li>
    </React.Fragment>
  )
}