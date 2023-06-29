import React from 'react'
import { MyForm, MyFormRegis } from './formWithCustomHooks'

const CustomHooks = () => {
  return (
    // <div>CustomHooks</div>
    <div
      style={{
        width: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <MyForm />
      <MyFormRegis />
    </div>
  )
}

export default CustomHooks
