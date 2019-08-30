import React from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

// Helpers
import * as assignments from '../../api/assignments'
import * as auth from '../../api/auth'

// Components
import List from './List/List'
import EditForm from './Form/Edit.Form'
import NewForm from './Form/New.Form'

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      assignments: []
    }

    this.createAssignment = this.createAssignment.bind(this)
    this.destroyAssignment = this.destroyAssignment.bind(this)
    this.editAssignment = this.editAssignment.bind(this)
  }

  async componentDidMount() {
    const profile = await auth.profile()
    this.setState({ assignments: profile.user.assignments })
  }

  async createAssignment(assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.createAssignment({ user: { _id: currentUserId }, assignment })
    window.location.reload(false);

    history.push(`/`)
  }

  async destroyAssignment(assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.destroyAssignment({ user: { _id: currentUserId }, assignment })
    window.location.reload(false);

    history.push(`/`)
  }

  async editAssignment(assignment) {
    const { currentUserId, history, refreshUsers } = this.props

    await assignments.updateAssignment({ user: { _id: currentUserId }, assignment })

    history.push(`/`)
  }

  render() {
    const { currentUserId, users } = this.props
    const { assignments } = this.state
    return (
      <>

        <Route
          path="/"
          exact
          component={() => <List currentUserId={currentUserId}
            destroyAssignment={this.destroyAssignment}
            assignments={assignments} />}
        />

        <Route path='/assignments/new' exact component={() => {
          return <NewForm onSubmit={this.createAssignment} />
        }} />
        <Route path='/assignments/:assignmentId/edit' exact component={({ match }) => {
          const assignment = this.state.assignments.find(assignment => assignment._id === match.params.assignmentId)
          return <EditForm onSubmit={this.editAssignment} assignment={assignment} />
        }} />
      </>
    )
  }
}

export default withRouter(Container)