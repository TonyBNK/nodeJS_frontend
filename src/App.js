import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const response = await axios.get('http://localhost:3010/users');
        const usersData = [];
        response.data.forEach(user => usersData.push(user));
        setUsers(usersData);
    }, []);

    return (
        <div className="App">
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
}

export default App;
