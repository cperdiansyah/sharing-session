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
      <label className="mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        className="border border-white transition duration-300 ease-in-out hover:border-blue-300"
      >
        Submit
      </button>
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
      <label className="mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="mb-2">
        Password:
        <input
          type="password"
          name="email"
          value={values.password}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        className="border border-white transition duration-300 ease-in-out hover:border-blue-300"
      >
        Submit
      </button>
    </form>
  )
}
