import React from 'react'
import { withRouter } from 'react-router'

import AdminHeader from './Navigation.AuthenticatedAdmin'
import StudentHeader from './Navigation.AuthenticatedStudent'

const AuthenticatedLinks = ({ history, logoutUser, admin }) => {
  const logout = () => {
    logoutUser()
    history.push('/login')
  }

  return (
    <ul className='nav justify-content-end'>
      {
        admin ? <AdminHeader logout={logout} /> : <StudentHeader logout={logout} />
      }
    </ul>
  )
}

export default withRouter(AuthenticatedLinks)