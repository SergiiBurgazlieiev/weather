import React, { useState } from 'react'; 
import styles from './SearchField.module.css';
import { FcSearch } from 'react-icons/fc';

const SearchField = ({ onFormSubmit }) => {
    const [city, setCity ] = useState('');

    const onInputChange = e => {
        setCity(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onFormSubmit(city);
        setCity('');
    }

    return (
        <div className={styles.FormContainer}>
            <form onSubmit={onSubmitHandler} className={styles.Form}>
                <input value={city} onChange={onInputChange} placeholder='search for a city...'/>
                <div  className={styles.Icon} onClick={onSubmitHandler}>
                    <FcSearch />
                </div>
                
            </form>
        </div>
    );
}
export default SearchField;