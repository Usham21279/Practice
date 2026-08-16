import useFetch from './use-Fetch'

const dummy_data = [
  { name: 'suresh', dist: 'sirohi' },
  { name: 'ketrina', dist: 'delhi' },
]

localStorage.setItem('dataObj', JSON.stringify(dummy_data))

function App() {
  const data = useFetch()
  return (
    <div>
      <h1>Data from localStorage</h1>
      {data.map((d) => (
        <h3 className='center'>{`Name is ${d.name} and city is ${d.dist}`}</h3>
      ))}
    </div>
  )
}

export default App
