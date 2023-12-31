import { AxiosError, GenericAbortSignal } from 'axios'
import { useEffect, useState } from 'react'
import { SERVICE, api } from 'src/utils/api'

const UseEffectWithCleanup = () => {
  const [data, setData] = useState<unknown>()
  const [loading, setLoading] = useState(false)

  const getData = async (signal: GenericAbortSignal) => {
    setLoading(true)
    try {
      const resData = await api.get(`${SERVICE.movie}/popular`, {
        signal: signal,
      })
      setData(resData.data)
      setLoading(false)
      return
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.code !== 'ERR_CANCELED') {
          setLoading(false)
        }
      }
      return error
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    console.log('callback')
    getData(controller.signal)
    return () => {
      console.log('cleanup')
      controller.abort()
    }
  }, [])
  return (
    <div className="div">
      <button className="border border-white px-3 py-2">
        UseEffectWithCleanup
      </button>
      <div className="resultData mt-4">
        <h4>Result</h4>
        {loading ? <p>loading....</p> : <p>{JSON.stringify(data)}</p>}
      </div>
    </div>
  )
}

export default UseEffectWithCleanup
