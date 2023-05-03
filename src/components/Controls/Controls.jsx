import React from 'react';

const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
    return (
        <ul>
            <li><button type='button' onClick={onIncrementGood}>Good</button></li>
            <li><button type='button' onClick={onIncrementNeutral}>Neutral</button></li>
            <li><button type='button' onClick={onIncrementBad}>Bad</button></li>
        </ul>
    );
    
};

export default Controls;