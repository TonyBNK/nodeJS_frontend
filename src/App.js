import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";


function App() {
    const [users, setUsers] = useState([]);
    const userNameRef = useRef(null);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3010/users');
        setUsers(response.data);
    }

    const addUserHandler = async () => {
        await axios.post('http://localhost:3010/users', {name: userNameRef.current.value});
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="App">
            {users.map(user => <div>{user.name}</div>)}
            <input ref={userNameRef}/>
            <button onClick={addUserHandler}>
                Add user
            </button>
        </div>
    );
}

export default App;
