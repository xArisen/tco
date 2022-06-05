import React, { useState } from 'react';
import './dataEntranceCard.css';
import Card from '../shared/card/Card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const DataEntranceCard = (props) => {
    const {setBucketValue, setDynamoDbValue, setManualArrayValue, onSubmitButtonClick} = props;
    const bucketValues = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' }
    ];
    const [selectedBucketValue, setSelectedBucketValue] = useState(null);
    const onBucketValueChange = (e) => {
        setSelectedBucketValue(e.value);
        setBucketValue(e.value.code);
    }

    const getInputBucketDropdownField = (props) => {
        const { fieldName, fieldDescription} = props;
        return (
        <>
        <div className='dropdown-content'>
                <label htmlFor="username1" className="block">{fieldName}</label>
                <Dropdown value={selectedBucketValue} options={bucketValues} onChange={onBucketValueChange} optionLabel="name" placeholder={fieldDescription} />
                </div>
                </>);
    }

    
    const dynamoDbValues = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' }
    ];
    const [selectedDynamoDbValue, setSelectedDynamoDbValue] = useState(null);
    const onDynamoDbValueChange = (e) => {
        setSelectedDynamoDbValue(e.value);
        setDynamoDbValue(e.value.code);
    }

    const getInputDynamoDbDropdownField = (props) => {
        const { fieldName, fieldDescription} = props;
        return (
        <>
        <div className='dropdown-content'>
                <label htmlFor="username1" className="block">{fieldName}</label>
                <Dropdown value={selectedDynamoDbValue} options={dynamoDbValues} onChange={onDynamoDbValueChange} optionLabel="name" placeholder={fieldDescription} />
                </div>
                </>);
    }


    const getInputTextField = (props) => {
        const {fieldName, fieldDescription} = props;
        return (<>
                <div className="field">
                    <label htmlFor="username1" className="block">{fieldName}</label>
                    <InputText id="username1" 
                    onChange={(e) => setManualArrayValue(e.target.value)}
                    aria-describedby="username1-help" className="block"/>
                    <small id="username1-help" className="block">{fieldDescription}</small>
                </div></>);
    }

    const getInputCardContent = () => {
        return (<div className='card'>
            <h4>Wprowadź wartości</h4>
            {getInputBucketDropdownField({header: true, fieldName: 'S3 Bucket', fieldDescription: 'Wybierz plik z usługi'})}
            {getInputDynamoDbDropdownField({header: true, fieldName: 'DynamoDB', fieldDescription: 'Wybierz tablicę z usługi'})}
            {getInputTextField({fieldName: 'Wprowadź dane do sortowania', fieldDescription: 'Podaj liczby całkowite oddzielone spacją'})}
            <Button className='submit-button' label="Wyślij" aria-label="Submit" onClick={onSubmitButtonClick} />
        </div>);
    }


    return (
        <div>
            <Card content={getInputCardContent()}
            className='card'/>
        </div>
    );
};

export default DataEntranceCard;