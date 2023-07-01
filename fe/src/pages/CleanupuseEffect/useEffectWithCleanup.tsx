import React, { useState } from 'react'
import { SERVICE, api } from 'src/utils/api'

const UseEffectWithCleanup = () => {
  const [data, setData] = useState<any>()
  const getData = async () => {
    try {
      const resData = await api.get(`${SERVICE.movie}/popular`)
      setData(resData.data)
      return console.log(resData.data)
    } catch (error) {
      return error
    }
  }
  return (
    <div className="div">
      <button onClick={getData} className="border border-white px-3 py-2">
        UseEffectWithCleanup
      </button>
      <div className="resultData mt-4">
        <h4>Result</h4>
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  )
}

export default UseEffectWithCleanup
