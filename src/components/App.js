import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Helpers
import * as auth from '../api/auth'
import * as token from '../helpers/local-storage'

// Components
import Header from './shared/Header'
import Navigation from './shared/Navigation/Navigation'
import Login from './auth/Login.Form'
import Signup from './auth/Signup.Form'
import StudentsContainer from './students/Container'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null,
      loading: true,
      admin: false
    }

    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
  }

  async componentDidMount () {
    if (token.getToken()) {
      const { user } = await auth.profile();
      this.setState({ currentUserId: user._id, loading: false, admin: user.admin });
    } else {
      this.setState({ loading: false })
    }
  }

  async loginUser (user) {
    const response = await auth.login(user)
    await token.setToken(response)
    
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id, admin: profile.user.admin })
  }

  logoutUser () {
    token.clearToken()
    this.setState({ currentUserId: null })
  }

  async signupUser (user) {
    const response = await auth.signup(user)
    await token.setToken(response)
    
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.user._id, admin: profile.user.admin })
  }

  render () {
    const { currentUserId, loading, admin } = this.state
    if (loading) return <span />

    return (
      <Router>
        <Header />
        <Navigation
          currentUserId={currentUserId}
          logoutUser={this.logoutUser}
          admin={admin} />
        <Switch>
          <Route path='/login' exact component={() => {
            return this.state.currentUserId ? <Redirect to='/users' /> : <Login onSubmit={this.loginUser} />
          }} />
          <Route path='/signup' exact component={() => {
            return this.state.currentUserId ? <Redirect to='/users' /> : <Signup onSubmit={this.signupUser} />
          }} />

          <Route path='/users' render={() => {
            return this.state.currentUserId
              ? <StudentsContainer currentUserId={currentUserId} />
              : <Redirect to='/login' />
          }} />

          <Redirect to='/login' />
        </Switch>
      </Router>
    )
  }
}

export default App