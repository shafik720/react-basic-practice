import React from 'react';
import './Data.css'

const Data = (props) => {
    let {_id, age, email, gender, name} = props.element;

    function saveThem(id){
        console.log(id)
    }
    return (
        <div>
            <div className="user-card">
                <h2>{name}</h2>
                <p>Email : {email} </p>
                <p>Age : {age} </p>
                <p>Gender : {gender} </p>
                <p>Id : {_id} </p>
                <button onClick={()=>saveThem(_id)}>Add Friend</button>
            </div>
        </div>
    );
};

export default Data;