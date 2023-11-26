"use client";
import React, {useState, useEffect} from "react";

export default function Forecast() {
    const weatherImg = [
        {id: cloudy, src: "/assets/cloudy.svg"},
        {id: rainy, src: "/assets/Rain.svg"},
        {id: sunny, src: "/assets/sunny.svg"},
        {id: thunderstorm, src: "/assets/thunderstorm.svg"},
        {id: sunnywithrain, src: "/assets/sunnywithrain.svg"},

    ]
    const [weatherIcon, setWeatherIcon] = useState(weatherIcon["sunny"].src);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-4/5 w-5/6" style={{ position: "absolute", overflowY: "scroll" }} />
                
        </>
    )
}