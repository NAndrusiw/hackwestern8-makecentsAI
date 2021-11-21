import React from 'react';
import Card from './Card';

const CardList = ({terms}) => {
    return(
        <div>
            {
                terms.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={terms[i].id} 
                            term={terms[i].term} 
                            description={terms[i].description}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;