import React from 'react'
import Form from './Form'

export default ({ onSubmit }) => (
  <main className='container'>
    <section className='row justify-content-md-center'>
      <div className='col col-lg-5'>
        <h1>Login</h1>
        <Form onSubmit={onSubmit} formType={'login'} />
      </div>
    </section>
  </main>
)
