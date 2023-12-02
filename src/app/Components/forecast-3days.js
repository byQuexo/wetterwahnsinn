"use client";
import React, {useState, useEffect} from "react";
import { ForecastItem } from ".";


export default function Forecast({ condition }) {
    const weatherImg = [
        {id: "cloudy", src: "/assets/cloudy.svg"},
        {id: "rainy", src: "/assets/Rain.svg"},
        {id: "sunny", src: "/assets/sunny.svg"},
        {id: "thunderstorm", src: "/assets/thunderstorm.svg"},
        {id: "sunnywithrain", src: "/assets/sunnywithrain.svg"},
    ];
    return (
        <>
            <div className="grid h-fill w-full" style={{ position: "absolute", overflowY: "scroll" }} >
                <div className="rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">3-day Forecast</h2>
                    <div className="grid grid-rows-2">
                        {['Heute', 'Morgen', 'Übermorgen'].map((day, index) => (
                            <ForecastItem key={index} day={day} tempmin={condition[index].tempmin} tempmax={condition[index].tempmax} description={condition[index].description} icon={weatherImg.find(item => item.id === condition[index].icon)?.src}  />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
