import './App.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {User} from "./components/User/User";


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
            {
                users.map(user => {
                        const deleteUser = async () => {
                            await axios.delete(`http://localhost:3010/users/${user._id}`);
                            getUsers();
                        }

                    const changeUser = async (name) => {
                        await axios.put(`http://localhost:3010/users/${user._id}`, {name});
                        getUsers();
                    }

                        return <User
                            key={user._id}
                            name={user.name}
                            onDelete={deleteUser}
                            onChange={changeUser}
                        />
                    }
                )
            }
            <input ref={userNameRef}/>
            <button onClick={addUserHandler}>
                Add user
            </button>
        </div>
    );
}

export default App;
