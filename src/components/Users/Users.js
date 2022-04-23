import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users ,setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete')
        if(proceed){
            console.log(id)
            const url =`http://localhost:5000/user/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    console.log('deleted')
                    const restUser = users.filter(user => user._id !== id)
                    setUsers(restUser)
                }
                console.log(data)
            })
        }

    }
    return (
        <div>
            <h2>users length:{users.length}</h2>
            <ul>
                {users.map(user => <li
                 key={user._id}>
                     {user._id}:: {user.name}:: {user.email}
                     <Link to={`/update/${user._id}`}><button>update</button></Link>
                      <button onClick={()=>handleDelete(user._id)}>X</button>
                      </li>)}
            </ul>
        </div>
    );
};

export default Users;