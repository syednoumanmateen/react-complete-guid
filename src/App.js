import React, { useState } from 'react'
import AddUser from './Users/AddUser'
import UserList from './Users/UserList'

const App = () => {

  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList(i => [...i, { name: uName, age: uAge, id: Math.random().toString() }])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userList.length && <UserList users={userList} />}
    </div>
  )
}

export default App
