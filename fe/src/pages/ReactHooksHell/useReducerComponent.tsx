import { useReducer } from 'react'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'incrementCount':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'changeName':
      return {
        ...state,
        name: action.name,
      }
    case 'changeColor':
      return {
        ...state,
        color: action.name,
      }
    default:
      return state
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, name: '' })

  return (
    <div className="mt-10">
      <h1 className="text-xl">Refactored useState Hell</h1>
      <h1>Counter</h1>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: 'incrementCount' })}
        className="border border-white px-3 py-2"
      >
        Increment Counter
      </button>
      <h1>Name</h1>

      <input
        value={state.name}
        onChange={(e) => dispatch({ type: 'changeName', name: e.target.value })}
      />
      <h1>Color</h1>

      <select
        value={state.color}
        onChange={(e) =>
          dispatch({ type: 'changeColor', color: e.target.value })
        }
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  )
}

export default UseReducerComponent
