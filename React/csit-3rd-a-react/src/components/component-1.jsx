import React, { useState } from 'react'
const Component2 = ({ user }) => {
  return (

    <div>Component2

      <Component3 user={user} />
    </div>

  )
}
const Component1 = () => {
  const [user, setUser] = useState("Samriddhi")
  return (
    <>
      <h1>{`Hello ${user}`}</h1>
      <Component2 user={user} />
    </>
  )
}

const Component3 = ({ user }) => {
  return (
    <>
      <h1>{`Hello ${user} `}</h1>
      <Component4 user={user} />
    </>
  )
}

const Component4 = ({ user }) => {
  <>
    <p>{`${user}`}</p>
    <strong>End</strong>
  </>
}

export default Component1
