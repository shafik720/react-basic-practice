import React from 'react';

const Mobile = () => {
    return (
        <div>
            <h2> <span className='battery'>100</span> %</h2>
            <button onClick={battery}>Down Battery</button>
        </div>
    );
};

function battery(){
    let percentage = document.querySelector('.battery');
    let percentageNumber = parseInt(percentage.innerText);
    let reducedNumber = percentageNumber - 10;
    if(percentageNumber>0){
        percentage.innerText = reducedNumber;
    }
    
}

export default Mobile;