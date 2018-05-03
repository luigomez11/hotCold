import React from 'react';

import AStatus from './aStatus';

export default function StatusSection(props){
    const {guesses, aStatus} = props;

    return (
        <section>
            <AStatus aStatus={aStatus} />
        </section>
    );
}