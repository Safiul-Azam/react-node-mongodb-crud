import React from 'react';

const AddUser = () => {

    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value 
        const user = {name, email}
        fetch('http://localhost:5000/user', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            console.log('success', data)
            alert('successfully your email and name is went')
            e.target.reset()
        })
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' />
                <br />
                <input type="email" name="email" placeholder='Email' />
                <br />
                <input type="submit" value="add " />
            </form>
        </div>
    );
};

export default AddUser;