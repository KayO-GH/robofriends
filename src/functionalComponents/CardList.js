import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {//destructure props in parameter
    throw new Error('NOOOOOOO!');
    return (
        <div>
            {
                robots.map(
                    (_, i) => <Card key={i} robot={robots[i]} />
                )
            }
        </div>
    );
};

export default CardList;