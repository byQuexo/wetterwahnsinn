"use strict";
import React, { useEffect, useState } from "react";
import { getWeather } from "@functions/index.js";
import "../globals.css";
import { Forecast } from ".";

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
    return (
        <>
            <div className="grid grid-rows-3 h-fit w-screen gap-4 min-w-min">
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
                <div className="grid grid-row-2 w-fit h-fit">
                    <div className="grid gris-cols-2 w-48 h-fit divide-y divide-y-2 divide-solid divide-zinc-800 gap-2 justify-items-center">
                        <div className="grid grid-col-1 h-fit w-56 md:w-80 lg:w-96" />  
                        <div className="grid grid-col-2 h-fit w-56 md:w-80 lg:w-96" />
                    </div>
                </div>
                {/* Forecast*/ }
                <div className="flex-1 flex-row h-auto w-full rounded">
                    <Forecast />
                </div>
            </div>
        </>
    );
}
