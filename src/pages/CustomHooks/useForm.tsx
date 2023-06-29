import { useState, ChangeEvent, FormEvent } from 'react'

export type FormValues = {
  [key: string]: string
}

export type useFormProps = {
  initialValues: FormValues
  onSubmit: (values: FormValues) => void
}

const useForm = ({ initialValues, onSubmit }: useFormProps) => {
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
    onSubmit(values)
  }

  return { values, handleChange, handleSubmit }
}

export default useForm
