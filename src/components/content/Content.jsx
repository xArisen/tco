import React, { useState, useEffect } from 'react';
import DataEntranceCard from '../dataEntranceCard/DataEntranceCard';
import './content.css';
import DataDisplayCard from '../dataDisplayCard/DataDisplayCard';

const Content = () => {
    
    const [bucketValue, setBucketValue] = useState(null);
    const [dynamoDbValue, setDynamoDbValue] = useState(null);
    const [manualArrayValue, setManualArrayValue] = useState(null);


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

    const submitValues = () => {
        setIsSubmitButtonClicked(true);
        setIsLoaded(false);
        setError(null);
        setItems(null);
        fetch("https://djb0j2wvvi.execute-api.eu-central-1.amazonaws.com/Prod/sort", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
            body: JSON.stringify({
                "default-numbers" : manualArrayValue ? manualArrayValue.split(' ').map(function(item) {
    return parseInt(item, 10);
}) : null,
                "s3-bucket" : bucketValue,
                "dynamodb-id" : dynamoDbValue
            } )
        })
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            console.log(result);
            const resultString = result.body.sorted.map(e => `${e} `)
            setItems(resultString);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }

    return (
        <div className='content-background'>  
            <div id='main-content'>
                <DataEntranceCard setBucketValue={setBucketValue}
                setDynamoDbValue={setDynamoDbValue}
                setManualArrayValue={setManualArrayValue}
                onSubmitButtonClick={submitValues}/>
                <DataDisplayCard isSubmitButtonClicked={isSubmitButtonClicked} isLoaded={isLoaded}
                value={items} error={error}/>
            </div>
        </div>
    );
};

export default Content;