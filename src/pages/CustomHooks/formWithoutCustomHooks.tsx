import React, { useState, ChangeEvent, FormEvent } from 'react'

type FormValues = {
  [key: string]: string
}

const MyForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
  }

  const [values, setValues] = useState<FormValues>(initialValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitted values:', values)
    // Perform further actions with the submitted form values
  }

  return (
    <form onSubmit={handleSubmit}>
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

export default MyForm
