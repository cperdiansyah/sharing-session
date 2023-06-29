import React from 'react'
import useForm, { FormValues } from './useForm'

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
}

export const MyForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
  }

  const onSubmit = (values: FormValues) => {
    console.log('Submitted values:', values)
    // Perform further actions with the submitted form values
  }

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export const MyFormRegis: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
  }

  const onSubmit = (values: FormValues) => {
    console.log('Submitted values:', values)
    // Perform further actions with the submitted form values
  }

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="email"
          value={values.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}
