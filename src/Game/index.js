import React, { Component } from 'react';
import './style.css';

import Grid from '../Grid';
import Board from '../Board';
import Alert from '../Alert';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCats: [],
            catCount: 12,
            result: ''
        };
        this.addToGrid.bind(this);
    }

    addToGrid(id) {
        const { selectedCats } = this.state;
        selectedCats.push(id);
        this.setState({
            selectedCats
        });
        if (selectedCats.length === 12) {
            const resultString = this.declareResult();
            this.setState({
                result: resultString
            });
        }
    }

    findDuplicate(list) {
        return list.reduce((accumulator, currentValue) => {
            if (accumulator.indexOf(currentValue) === -1) {
                accumulator.push(currentValue);
            }
            return accumulator;
        }, []);
    }

    declareResult() {
        const { selectedCats, catCount } = this.state;
        for (let gridCounter=1; gridCounter<=catCount/3; gridCounter++) {
            const row = selectedCats.slice((gridCounter-1)*3, (gridCounter*3));
            const unique = this.findDuplicate(row);
            if (row.length !== unique.length) {
                return('YOU LOSE');
            } else {
                continue;
            }
        }
        return('YOU WIN');
    }

    closeModal() {
        this.setState({
            result: '',
            selectedCats: []
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <h1>Lets play a game!</h1>
                    <div className='column-layout'>
                        <div className='grid-wrapper'>
                            <div>Click on a unique cat to add to grid</div>
                            <Grid catCount={this.state.catCount} addToGrid={(catId) => this.addToGrid(catId)} />
                        </div>
                        <div className='board-wrapper'>
                            <div>CATS GRID</div>
                            <Board catCount={this.state.catCount} selectedCats={this.state.selectedCats} />
                        </div>
                    </div>
                </div>
                {this.state.result && <Alert result={this.state.result} closeModal={() => this.closeModal()} />}
            </React.Fragment>
        );
    }
}
export default Game;
