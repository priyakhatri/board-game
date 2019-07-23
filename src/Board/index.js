import React from 'react';
import './style.css';

const Board = (props) => {
    const { selectedCats, catCount } = props;
    const board = [];
    for (let i=0; i < catCount; i++) {
        board.push(<div className="board-cell" key={i}>
            {selectedCats.length > 0 && selectedCats[i] && <img src={`/images/cat_${selectedCats[i]}.png`} alt={`cat-${i}`}></img>}
        </div>);
    }
    return (
    <div className='board'>
        {board}
    </div>
    );
}
export default Board;
