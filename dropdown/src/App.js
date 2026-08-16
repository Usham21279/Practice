import './App.css'
import { useState } from 'react'

function App() {
  const [val, setVal] = useState(1)

  return (
    <div>
      <h1>Hello</h1>
      <label htmlFor='value'>Choose a value:</label>
      <select
        name='value'
        id='value'
        value={val}
        onChange={(e) => {
          setVal(e.target.value)
          console.log(e.target.value)
        }}
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <h2>{`Selected Value is : ${val}`}</h2>
    </div>
  )
}

export default App
