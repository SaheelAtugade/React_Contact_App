import React, { useState } from 'react'
import Form from './components/Form'
import Output from './components/Output'

const App = () => {
    const [allUsers, setAllUsers] = useState([]);
    
  return (
    <div>
      <Form allUsers={allUsers} setAllUsers={setAllUsers} />
      <Output allUsers={allUsers} setAllUsers={setAllUsers}/>
    </div>
  )
}

export default App