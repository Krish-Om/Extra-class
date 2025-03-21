import { useState } from "react"
import "./Home.css"
import Todo from './Todo.jsx'

const Home = () => {
  const [newTask, setNewTask] = useState('');
  return (
    <>
      <h2 className='text-center text-light mt-5'>TO-DO list</h2>
      <main>
        <div className="list-box">
          <input type="text" value={newTask}
            onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={addTask}></button>

        </div>
      </main>
    </>
  )
}

export default Home
