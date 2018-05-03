import React from 'react';

export default class GuessForm extends React.Component {
    onSubmit(event){
        event.preventDefault();

        if(this.props.makeGuess){
            const value = this.input.value;
            this.props.makeGuess(value);
        }
        this.input.value = '';
        this.input.focus();
    }

    render(){
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <input 
                    type="number"
                    name="userGuess"
                    id="userGuess"
                    className="text"
                    min="1"
                    max="100"
                    autoComplete="off"
                    aria-labelledby="feedback"
                    ref={input => (this.input = input)}
                    required
                />
                <button
                    type="submit"
                    name="submit"
                    id="guessButton"
                    className="button"
                >
                    Guess
                </button>
            </form>
        );
    }
}