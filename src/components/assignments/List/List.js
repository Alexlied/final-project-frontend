import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyAssignment, assignments }) => {
  const list = assignments.map(assignment => (
    <div key={assignment._id} className='card'>
      <div className='card-body'>
        <h2 className='card-title'>{assignment.title}</h2>
        <p className='card-text'>{assignment.description}</p>
        <p className='card-text'><a href={assignment.link}>Project Link</a></p>
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyAssignment={destroyAssignment}
        assignment={assignment}
         />
    </div>
  ))

  if (list.length === 0) {
    return (
      <>
        <h2>No assignments found</h2>
      </>
    )
  } else {
    return (
      <>
        {list}
      </>
    )
  }
}