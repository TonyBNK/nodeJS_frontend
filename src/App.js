import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const response = await axios.get('http://localhost:3010/users');
        setUsers(response.data);
    }, []);

    return (
        <div className="App">
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
}

export default App;
