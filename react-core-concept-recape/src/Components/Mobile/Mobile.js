import React, { useState } from 'react';

const Mobile = () => {
    let [numbers, setNumbers] = useState(100);
    function work(){
        let reduced = numbers - 10;
        if(numbers>0){
            setNumbers(reduced);
        }
        
    }
    return (
        <div>
            <h2> <span className='battery'>{numbers}</span> %</h2>
            <button onClick={work}>Down Battery</button>
        </div>
    );
};



export default Mobile;