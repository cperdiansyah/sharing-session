import React from 'react'
import UseStateComponent from './useState/useStateComponent'
import UseReducerComponent from './useState/useReducerComponent'
import UseEffectComponent from './useEffect/useEffectComponent'

const HooksAlternative = () => {
  return (
    <div className="layout flex flex-wrap justify-evenly flex-row">
      <div className="useState w-1/2">
        <h1 className="text-xl">Use State Hooks</h1>
        <UseStateComponent />
        {/* <UseReducerComponent /> */}
      </div>
      <div className="useEffect w-1/2">
        <h1 className="text-xl">Use Effect Hooks</h1>
        <UseEffectComponent />
      </div>
    </div>
  )
}

export default HooksAlternative
