import React from 'react';
import './Data.css'

const Data = (props) => {
    let {_id, age, email, gender, name} = props.element;
    return (
        <div>
            <div className="user-card">
                <h2>{name}</h2>
                <p>Email : {email} </p>
                <p>Age : {age} </p>
                <p>Gender : {gender} </p>
                <p>Id : {_id} </p>
                <button>Add Friend</button>
            </div>
        </div>
    );
};

export default Data;