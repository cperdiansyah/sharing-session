import React, { useState } from 'react'

const UseStateComponent: React.FC = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [color, setColor] = useState('red')

  return (
    <div className=" flex flex-col w-fit m-auto gap-3">
      <h1 className="text-xl">useState Hell</h1>

      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-white px-3 py-2"
      >
        Increment Counter
      </button>

      <h1>Name</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Color</h1>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  )
}

export default UseStateComponent
