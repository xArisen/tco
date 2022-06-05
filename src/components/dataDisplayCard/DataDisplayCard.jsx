import React from 'react';
import Card from '../shared/card/Card';
import './dataDisplayCard.css';
import { ProgressSpinner } from 'primereact/progressspinner';

const DataDisplayCard = (props) => {
    const {isSubmitButtonClicked, isLoaded, value, error} = props;
    
    const getContent = () => {
        if(!isLoaded){
            return <ProgressSpinner/>;
        }

        if(error){
            return(
            <div className='result'>
            <h4>Wystąpił następujący błąd: </h4>
            <p className='error-p'>{error}</p>
            </div>
            );
        }

        return (
            <div className='result'>
            <h4>Posortowana tablica:</h4>
            {value && <p>{value}</p>}
            </div>
        );
    }
    
    return (
        <div className='card-container'>
            <Card content={getContent()}
            isHidden={!isSubmitButtonClicked}
            className='card'/>
        </div>
    );
};

export default DataDisplayCard;