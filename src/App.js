import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Users from './components/list/Users';

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      username: 'ankur',
      age: 39
    },
    {
      id: 2,
      username: 'sam',
      age: 42
    },
    {
      id: 3,
      username: 'rick',
      age: 41
    }
  ])

  const addUser = (userObj) => {
    // let tempUsersList = [...usersList]
    // tempUsersList.push(userObj)
    // setUsersList(tempUsersList)
    console.log(userObj)
    setUsersList((prevUsers) => {
      return [...prevUsers, userObj]
    })
  }

  return (
    <div className="App">
      <Form callAddUser={addUser}/>
      <Users allusers={usersList}/>
    </div>
  );
}

export default App;
