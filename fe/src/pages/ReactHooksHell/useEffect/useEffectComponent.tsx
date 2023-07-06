import React, { useState, useEffect } from 'react'
import { SERVICE, api } from 'src/utils/api'

function UseEffectComponent() {
  const [state, setState] = useState({
    page: 1,
  })
  const [data, setData] = useState<unknown>()

  useEffect(() => {
    // This useEffect hook will run once,
    // when the component renders for the first time.
    api
      .get(`${SERVICE.movie}/popular?page=${state.page}&timeout=none`)
      .then((data) => {
        setData(data)
      })
  }, [state.page])

  return (
    <div>
      <label htmlFor="">
        Page
        <input
          type="text"
          value={state.page}
          onChange={(event) => setState({ page: Number(event.target.value) })}
        />
      </label>
      <div className="resultData mt-4">
        <h4>Result</h4>
        {!data ? <p>loading....</p> : <p>{JSON.stringify(data)}</p>}
      </div>
    </div>
  )
}

export default UseEffectComponent
