import React from 'react'
import { withRouter } from 'react-router'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
      .then(() => this.props.history.push('/students'))
  }

  render() {
    if (this.props.formType === 'signup') {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              className='form-control'
              id='email'
              onChange={this.handleChange}
              name='email'
              type='text'
              required
              value={this.state.email} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              id='password'
              onChange={this.handleChange}
              name='password'
              type='password'
              required
              value={this.state.password} />
          </div>

          <div className='form-group'>
            <label htmlFor='firstname'>First Name</label>
            <input
              className='form-control'
              id='firstname'
              onChange={this.handleChange}
              name='firstname'
              type='text'
              required
              value={this.state.firstname} />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last Name</label>
            <input
              className='form-control'
              id='lastname'
              onChange={this.handleChange}
              name='lastname'
              type='text'
              required
              value={this.state.lastname} />
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              className='form-control'
              id='email'
              onChange={this.handleChange}
              name='email'
              type='text'
              required
              value={this.state.email} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              id='password'
              onChange={this.handleChange}
              name='password'
              type='password'
              required
              value={this.state.password} />
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      )
    }
  }
}

export default withRouter(Form)