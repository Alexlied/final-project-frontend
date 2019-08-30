import React from 'react'

export default ({ users }) => {
  const list = users.map(user => (
    <div className="card-body" key={user._id}>
      <span>
        {`${user.firstname} ${user.lastname} - ${user.email}`}
      </span>
    </div>
  ))

  return (
    <>
        {list}
    </>
  )
}
