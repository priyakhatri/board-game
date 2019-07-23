import React from 'react';
import './style.css';

const Alert = (props) => {
    const { result, closeModal } = props;
    return (
    <div className='wrapper'>
        <div className='modal'>
            <div>{result}</div>
            <button onClick={closeModal}>Play Again</button>
        </div>
    </div>
    );
}
export default Alert;
