import React, { useEffect, useState } from "react";
import "./Weather.css"; 

const Weather = () => {
    const [city, setCity] = useState(null); 
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e93a6e70932b25ea01273674beffa040`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);
        }
        fetchApi();
    }, [search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search} 
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="Location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city?.main?.temp} °C</h1>
                            <h3 className="temp_max">
                                Min: {city?.main?.temp_min} °C | Max: {city?.main?.temp_max} °C
                            </h3>
                            <h3 className = "Humidity"> Humidity:{city?.main?.humidity} </h3>
                            <h3 className = "pressure">pressure:{city?.main?.pressure} </h3>

                        </div>
                        <div className="wave-one"></div>
                        <div className="wave-two"></div>
                        <div className="wave-three"></div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Weather;
