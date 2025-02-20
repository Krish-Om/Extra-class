import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
  return (
    <div className='cardDesign'>
      <h2>This is {title}</h2>
    </div >
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hi! this is Krishom, Hello World</h1>
      <p className='mainParagraph'>The first day of learning React </p>


      <Card title={'Card 1'} />
      <Card title={'Card 2'} />

    </div>
  )
}

export default App
