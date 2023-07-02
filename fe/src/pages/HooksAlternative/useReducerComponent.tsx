import { useReducer, ChangeEvent } from 'react'

enum CountActionKind {
  INCREMENT = 'increment',
  SETLOADING = 'setLoading',
  SETUSERNAME = 'setUsername',
}

// An interface for our actions
interface CountAction {
  type: CountActionKind
  payload?: any
}

const reducer = (state: any, action: CountAction) => {
  switch (action.type) {
    case CountActionKind.INCREMENT:
      return { count: state.count + 1 }
    case CountActionKind.SETLOADING:
      return { isLoading: action.payload }
    case CountActionKind.SETUSERNAME:
      return { username: action.payload }
    default:
      return state
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    isLoading: false,
    username: '',
  })

  const handleClick = () => {
    dispatch({ type: CountActionKind.INCREMENT })
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: CountActionKind.SETUSERNAME, payload: event.target.value })
  }
  console.log('rendering form')

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleClick}>Increment</button>
      <p>Is loading: {state.isLoading}</p>
      <input
        type="text"
        placeholder="Enter your username"
        value={state.username}
        onChange={handleChange}
      />
    </div>
  )
}

export default UseReducerComponent
