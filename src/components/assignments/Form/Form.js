import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    const { assignment = {} } = this.props
    const { content = '', emotion = '' } = assignment
    this.state = { content, emotion }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { assignment } = this.props

    if (assignment && assignment._id) {
      const body = Object.assign({}, this.state, { _id: assignment._id })
      this.props.onSubmit(body)
    } else {
      this.props.onSubmit(this.state)
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='emotion'>Emotion</label>
          <input
            className='form-control'
            id='emotion'
            onChange={this.handleChange}
            name='emotion'
            type='text'
            value={this.state.emotion} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea
            className='form-control'
            id='content'
            onChange={this.handleChange}
            name='content'
            type='text'
            value={this.state.content} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}