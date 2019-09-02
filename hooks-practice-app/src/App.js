import React, { useState } from 'react';
import UserTable  from './tables/UserTable';
import AddUserForm from './forms/AddUserForm'

function App() {
  const usersData = [
    {id: 1, name:'Ramses', username:'RanchiGB'},
    {id: 2, name:'Carlos', username:'Carlitosrojas'},
    {id: 3, name:'Andrea', username:'Dreacreazz'},
  ]

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
