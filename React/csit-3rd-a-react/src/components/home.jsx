import { Link } from "react-router-dom"
import Component1 from "./component-1"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Component1 />
      <Link to="/movies">Movies</Link>

    </>
  )
}

export default Home
