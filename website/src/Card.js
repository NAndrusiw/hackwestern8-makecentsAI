import React from 'react';

const Card = ({term, description}) => {
    return(
        <div className = 'flip-card grow dib v-mid tc'>
            <div className = "flip-card-inner">
                <div className = "flip-card-front">
                <h2 className = "flip-card-inner">{term}</h2>
                </div>
                <div className = "flip-card-back">
                <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;