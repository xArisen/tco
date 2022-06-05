import React from 'react';
import './card.css'
import { Card as DefaultCard } from 'primereact/card';

const Card = (props) => {
    const {content, isHidden} = props;

    const getContent = () =>{
        if(isHidden){
            return <></>
        }

        return <DefaultCard className='card'>{content}</DefaultCard>;
    }

    return (
        getContent()
    );
};

export default Card;