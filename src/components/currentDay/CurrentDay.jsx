import React, { Fragment } from 'react';
import  { getDate, nightOrDay } from '../../helpers/helpers';
import styles from './CurrentDay.module.css';

const CurrentDay = ({ cityWeather }) => {
    
    if(!cityWeather.data){
        return null;
    }

    const { name }= cityWeather.data.city;
    const { temp, feels_like, humidity } = cityWeather.data.list[0].main;
    const { description, icon, id } = cityWeather.data.list[0].weather[0];
    const { speed } = cityWeather.data.list[0].wind;
    
    return(
        <Fragment>
            <div className={styles.Left}>
                <span>{name} city</span>
                <span>{getDate(cityWeather.data.list[0].dt_txt)}</span>
                <span>{description}</span>
                <div className={styles.IconHolder}>
                    <span><i className={`wi wi-owm-${nightOrDay(icon)}-${id} ${styles.Icon}`}></i></span>
                    <span className={styles.MainTemp}>{`${Math.round((temp*9)/5 - 459.67)}`}<span className={styles.F}>&deg;F</span></span>
                </div>
            </div>
            <div className={styles.Right}>
                <span>{`Feels like ${Math.round((feels_like*9)/5-459.67)}`}<span>&deg;F</span></span>
                <span>{`Humidity ${humidity}%`}</span>
                <span>{`Wind ${speed}mph`}</span>
            </div>
        </Fragment>
    );
}
export default CurrentDay;