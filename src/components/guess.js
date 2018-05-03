import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function Guess(props){
    const {feedback} = props;
    return(
        <section aria-label="GUESS" aria-describedby="feedback">
            <Feedback feedback={feedback} />
            <GuessForm onGuess={guess => props.makeGuess(guess)} />
        </section>
    );
}