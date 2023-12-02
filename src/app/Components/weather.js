"use strict";
import React, { useEffect, useState } from "react";
import { getWeather } from "@functions/index.js";
import "../globals.css";
import { Forecast, Placeholder, ForecastDaily } from ".";

export default function WeatherPage({ location }) {
    useEffect(() => {
        const data = getWeather(location);
        data.then((res) => {
            setCity(res.address);
            setTemp(res.currentConditions.temp);
        }).catch
        ((err) => {
            setCity("Error");
        });
    }, []);

    const [weather, setWeather] = useState("night");
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");

    const condition = [
        {day: "Heute", tempmin: "15", tempmax: "23", icon: "sunny", description: "Sonnig"},
        {day: "Morgen", tempmin: "16", tempmax: "22", icon: "sunnywithrain", description: "Sonnig mit Regen"},
        {day: "Übermorgen", tempmin: "17",tempmax: "25", icon: "thunderstorm", description: "Gewitter"},
    ];

    const conditionsDaily = [
        {time: "Heute", temp: "15",  icon: "sunny"},
        {time: "Morgen", temp: "16",  icon: "sunnywithrain"},
        {time: "Übermorgen", temp: "17", icon: "thunderstorm"},
    ];

    return (
        <>
            <div className="grid grid-rows-3 h-fit w-fit gap-4 min-w-min">
                <div className="grid grid-row w-fit h-fit">
                        <div className="grid grid-cols-2 md:grid-rows-1 h-fit gap-5" >
                            <div className="grid grid-col-1 md:grid-row-1 h-fit w-fit gap-4">
                                <h1 className="text-xl h-fit font-bold w-32 lg:56">Mein Standort</h1>
                                <p className="h-fit font-bold w-fill">{ city }</p>
                                <div className="rounded-lg h-8 w-20 h-fit justify-items-center" style={{ backgroundColor: "#282828"}}>
                                    <p style={{marginLeft: "0.25rem"}} className="font-bold w-auto">{ temp }&#x2103;</p>
                                </div>
                            </div>
                            <div className="grid grid-col-2 md:grid-row-2 h-auto w-32 md:w-52 lg:w-64">
                                <img src={`/assets/${weather}.svg`} alt="Avatar" className="rounded-full h-auto w-auto" />
                            </div>
                        </div>
                </div>
                {/* Placeholder */ }
                {/* <Placeholder /> */}
                <div className="grid grid-row-2 h-auto w-full rounded">
                    <Placeholder />
                    <ForecastDaily conditions={conditionsDaily}/>
                </div>
                {/* <Placeholder /> */}
                {/* Forecast*/ }
                <div className="grid flex-row-3 h-auto w-full rounded">
                    <Placeholder />
                    <Forecast condition={condition}/>
                </div>
            </div>
        </>
    );
}
