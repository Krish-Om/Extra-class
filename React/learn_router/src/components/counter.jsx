import { useState } from "react"


const ChildA = ({ count, setCount }) => {

  return (
    <>
      <h1>Child A</h1>
      <p>Count: {count}</p>
      <button type="" onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

const ChildB = ({ count, setCount }) => {
  return (
    <>
      <h1>Child B</h1>
      <p>Count: {count}</p>
      <button type="" onClick={() => setCount(count - 1)}> Decrement</button >
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} setCount={setCount} />
    </>
  )
}

export default Counter
