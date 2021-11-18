import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3010/users');
        setUsers(response.data);
    }

    const addUserHandler = async () => {
        await axios.post('http://localhost:3010/users');
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="App">
            {users.map(user => <div>{user.name}</div>)}
            <button onClick={addUserHandler}>
                Add user
            </button>
        </div>
    );
}

export default App;
