import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Users from './components/list/Users';

function App() {
  const [usersList, setUsersList] = useState([
    {
      username: 'ankur',
      age: 39
    },
    {
      username: 'sam',
      age: 42
    },
    {
      username: 'rick',
      age: 41
    }
  ])

  const addUser = (userObj) => {
    let tempUsersList = [...usersList]
    tempUsersList.push(userObj)
    setUsersList(tempUsersList)
  }

  return (
    <div className="App">
      <Form callAddUser={addUser}/>
      <Users allusers={usersList}/>
    </div>
  );
}

export default App;
