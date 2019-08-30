import request from './request'

export const createAssignment = ({ user, assignment }) => {
  const path = `/api/students/${user._id}/assignments`
  const options = { body: assignment, method: 'POST' }
  return request(path, options)
}

export const destroyAssignment = ({ user, assignment }) => {
  const path = `/api/students/${user._id}/assignments/${assignment._id}`
  const options = { method: 'DELETE' }
  return request(path, options)
}

export const updateAssignment = ({ user, assignment }) => {
  const path = `/api/students/${user._id}/assignments/${assignment._id}`
  const options = { body: assignment, method: 'PUT' }
  return request(path, options)
}

export const getAssignment = (currentUserId) => {
  const path = `/api/students/${currentUserId}/assignments`
  const options = { method: 'GET' }
  return request(path, options)
}