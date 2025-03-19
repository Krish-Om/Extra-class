import "./Home.css"
import Todo from './Todo.jsx'
const Home = () => {
  return (
    <>
      <h2 className='text-center text-light mt-5'>TO-DO list</h2>
      <main>
        <div className="list-box">
          <Todo />
        </div>
      </main>
    </>
  )
}

export default Home
