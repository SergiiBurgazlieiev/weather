import React from 'react';
import styles from  './Card.module.css';
import  { nightOrDay } from '../../helpers/helpers';

const Card = ({ date, id, icon, min, max }) => {

    let arr = date.split(' ');

    return(
        <div className={styles.Card}>
            <span>{`${arr[1]} ${arr[2]}`}</span>
            <span>{arr[0]}</span>
            <span className={styles.Span}><i className={`wi wi-owm-${nightOrDay(icon)}-${id}`} ></i></span>
            <div className={styles.MinMax}>
                <span className={styles.SpanMin}>{`${Math.round( (min * 9) / 5 - 459.67)}`}<span className={styles.F}>&deg;F</span></span>
                <span className={styles.SpanMax}>{`${Math.round( (max * 9) / 5 - 459.67)}`}<span className={styles.F}>&deg;F</span></span>
            </div>
        </div>
    );
};
export default Card;