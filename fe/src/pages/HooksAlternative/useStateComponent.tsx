import React, { useState, ChangeEvent, FormEvent } from 'react'
interface FormData {
  name: string
  email: string
  age: number
  address: string
}

const UseStateComponent: React.FC = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(event.target.value)
  }
  console.log('rendering form')

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <p>Is loading: {isLoading}</p>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleChange}
      />
    </div>
  )
}

export default UseStateComponent
