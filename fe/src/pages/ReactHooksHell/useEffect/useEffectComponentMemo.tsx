import React, { useState, useEffect, useMemo } from 'react'
import { SERVICE, api } from 'src/utils/api'

function UseEffectComponentMemo() {
  const [state, setState] = useState({
    page: 1,
  })
  const [data, setData] = useState<unknown>()

  const nameFromApi = useMemo(() => {
    return api
      .get(`${SERVICE.movie}/popular?page=${state.page}&timeout=none`)
      .then((data) => {
        data
      })
  }, [state.page])

  useEffect(() => {
    // This useEffect hook will run once,
    // when the component renders for the first time.

    setData(nameFromApi)
  }, [nameFromApi])

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

export default UseEffectComponentMemo
