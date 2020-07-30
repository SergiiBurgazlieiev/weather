import {useState, useEffect} from 'react';
import axios from 'axios';

const useCities = (defaultSearchTerm) => {
    const [cityWeather, setCityWeather] = useState([]);

    useEffect(() => {
        onSearch(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const onSearch = async cityName => {
        const response = await axios.get(`//api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}&q=${cityName}`);
        setCityWeather(response);
    }

    return [ cityWeather, onSearch ];
}

export default useCities;