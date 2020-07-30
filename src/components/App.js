import React from 'react';
import SearchField from './searchField/SearchField';
import useCities from '../hooks/useCities';
import CurrentDay from './currentDay/CurrentDay';
import Card from './card/Card';
import { getDate } from '../helpers/helpers';

import styles from './App.module.css';

const App = () => {
    const[cityWeather, onSearch ] = useCities('Chicago');

    if(!cityWeather.data){
        return null;
    }
    const hoursOfTheDay = cityWeather.data.list.slice(0,17);

    const renderList = hoursOfTheDay.map(el => <Card 
        key={el.dt}
        date={getDate(el.dt_txt)}
        id={el.weather[0].id}
        icon ={el.weather[0].icon}
        min={el.main.temp_min}
        max={el.main.temp_max}
    />);

    return(
        <section className={styles.App}>
            <main>
                <div className={styles.Search}>
                    <SearchField onFormSubmit={onSearch}/>
                </div>
                <div className={styles.BoxTwo}>
                    <CurrentDay cityWeather={cityWeather}/>
                </div>
                <div className={styles.BoxThree}>
                    {renderList}
                </div>
            </main>
        </section>
    );
    
}
export default App;
