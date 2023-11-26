"use strict";
import React, { useEffect, useState } from "react";
import { getWeather } from "@functions/index.js";

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
            <div className="flex h-screen w-fill gap-4 min-w-min">
                <div className="flex-1 h-auto w-full rounded">
                    <div className="flex flex-rows-3 h-auto w-auto">
                        <div className="flex flex-cols-2 h-auto w-fill gap-12" >
                            <div className="flow grid-rows-2 md:grid-flow-col h-auto w-auto">
                                <h1 className="h-auto font-bold">Standort</h1>
                                <p className="h-auto font-bold">{ city }</p>
                                <p className="h-auto font-bold">{weather}</p>
                                <div className="rounded-lg h-auto w-16 justify-items-center" style={{ backgroundColor: "#282828", marginTop: "6rem"}}>
                                    <p style={{marginLeft: "0.25rem"}} className="font-bold">{ temp }&#x2103;</p>
                                </div>
                            </div>
                            <div className="grid h-auto w-full ">
                                <img src={`/assets/${weather}.svg`} alt="Avatar" className="rounded-full h-44" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
