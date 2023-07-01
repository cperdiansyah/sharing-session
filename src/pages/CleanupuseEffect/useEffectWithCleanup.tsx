import React from 'react'
import { VITE_MOVIE_API } from 'src/utils'

const UseEffectWithCleanup = () => {
  const getData = async () => {
    console.log(VITE_MOVIE_API)
    return "asd"
  }
  return <div>UseEffectWithCleanup</div>
}

export default UseEffectWithCleanup
