import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyAssignment, user }) => {
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card'>
      <div className='card-body'>
        {/* <p className='card-text'>{assignment.content}</p>
        {assignment.emotion === '' ? <p></p> :
          <blockquote className='blockquote mb-0'>
            <footer className='blockquote-footer'>Was feeling: {assignment.emotion}</footer>
          </blockquote>
        } */}
        *Assignment info here*
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyPost={destroyAssignment}
        assignment={assignment}
        user={user} />
    </div>
  ))

  if (assignments.length === 0) {
    return (
      <>
        <h1 className='mb-4'>{user.username}'s Assignments</h1>
        <p>No assignments found</p>
      </>
    )
  } else {
    return (
      <>
        <h1 className='mb-4'>{user.username}'s Assignments</h1>
        {assignments}
      </>
    )
  }
}