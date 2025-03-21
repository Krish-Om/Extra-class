import React, { createContext, useState, useContext } from 'react'


const UserContext = createContext()
const UserContextComponent = () => {
  const [user, setUser] = useState("Krishom")
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Component2 />
    </UserContext.Provider>
  )
}
function Component2() {
  return (
    <>
      <h1>This is Component2</h1>
      <Component3 />
    </>
  )
}

function Component3() {
  const user = useContext(UserContext)
  return (

    <>
      <h1>This is Component2,{`${user}`}</h1>

    </>
  )
}
export default UserContextComponent 
