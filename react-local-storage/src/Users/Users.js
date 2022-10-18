import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import './Users.css'
const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  console.log(users);
    return (
        <div>
            <h2>Total Users Found : {users.length} </h2>
        <div className="main-card">            
            {
                users.map(user=><Data 
                    element = {user}
                    key = {user._id}
                ></Data>)
            }
        </div>
        </div>
    );
};

export default Users;