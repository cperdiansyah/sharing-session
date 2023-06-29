import axios from 'axios'
import { useEffect, useState } from 'react'

interface IData {
  id: number
  title: string
  body: string
}

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data')
    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

const useDataFetching = (url: string): IData[] | null => {
  const [data, setData] = useState<IData[] | null>(null)

  useEffect(() => {
    fetchData(url)
  }, [url])

  const fetchData = async (endpoint:string) => {
    try {
      const response = await axios.get<IData[]>(endpoint)
      setData(response.data)
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return data
}

const MyComponent: React.FC = () => {
  const data = useDataFetching('https://api.example.com/data')

  return (
    <div>
      <h1>Data:</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
