import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUserId, destroyAssignment, assignment }) => (
  <div className='card-footer text-muted d-flex justify-content-around'>
    {
      (
        <>
          <Link className='btn btn-link' to={`/students/${currentUserId}/assignments/${assignment._id}/edit`}>Edit Assignment</Link>
          <button
            className='btn btn-link text-danger'
            onClick={() => destroyAssignment(assignment)}>
            Delete Assignment
          </button>
        </>
      )
    }
  </div>
)