import { useState } from 'react'
import './App.css'

const Card = ({ title }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className='cardDesign'>
      <h2>This is {title}</h2>
      <button onClick={() => {
        setIsLiked(!isLiked);
        setCount(count + 1);
      }
      }>
        {isLiked ? 'Liked' : 'Unlike'}
      </button>
      <h1>{count}</h1>
    </div >
  )
}

function App() {

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
