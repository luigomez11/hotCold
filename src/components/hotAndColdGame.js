import React from 'react';

import Guess from './guess';
import StatusSection from './status';
import Info from './info';
import Restart from './restart';

export default class HotAndColdGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Guess the number',
            aStatus: '',
            hiddenNumber: Math.round(Math.random() * 100) + 1
        };
    }

    restartGame(){
        this.setState({
            guesses: [],
            feedback: 'Guess the number',
            aStatus: '',
            hiddenNumber: Math.round(Math.random() * 100) + 1
        });
    }

    guess(guess){
        guess = parseInt(guess, 10);
        if(isNaN(guess)){
            this.setState({ feedback: 'Invalid input, try again' });
            return;
        }

        const difference = Math.abs(guess - this.state.hiddenNumber);

        let feedback;
        if(difference >= 50){
            feedback = 'VERY COLD';
        }else if(difference >= 30){
            feedback = 'WARM';
        }else if(difference >= 10){
            feedback = 'HOT';
        }else if(difference >= 1){
            feedback = 'ON FIRE';
        }else{
            feedback = 'CORRECT';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });

        //need to add title udpate????
    }

    statusUpdate(){
        const {guesses, feedback} = this.state;

        let aStatus = `You're ${feedback}: Current guesses: ${guesses.reverse().join(', ')}`;

        this.setState({aStatus});
    }

    render(){
        const {feedback, guesses, aStatus} = this.state;

        return(
            <div>
                <main>
                    <Guess
                        feedback={feedback}
                        onGuess={guess => this.makeGuess(guess)}
                    />
                    <StatusSection
                        guesses={guesses}
                        aStatus={aStatus}
                    />
                    <Info />
                </main>
            </div>
        );
    }
}