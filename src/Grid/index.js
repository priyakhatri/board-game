import React from 'react';
import './style.css';

const Grid = (props) => {
    const { catCount } = props;
    const grid = [];
    for (let i=1; i <= catCount; i++) {
        grid.push(<div className="cell" key={i} onClick={() => props.addToGrid(i)}>
            <img src={`/images/cat_${i}.png`} alt={`cat-${i}`}></img>
        </div>);
    }
    return (
    <div className='grid'>
        {grid}
    </div>
    );
}
export default Grid;
