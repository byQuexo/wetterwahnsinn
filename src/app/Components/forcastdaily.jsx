"use client";
import React from "react";
import { ForecastDailyItem } from ".";

export default function ForecastDaily({conditions}) {
    const weatherImg = [
        {id: "cloudy", src: "/assets/cloudy.svg"},
        {id: "rainy", src: "/assets/Rain.svg"},
        {id: "sunny", src: "/assets/sunny.svg"},
        {id: "thunderstorm", src: "/assets/thunderstorm.svg"},
        {id: "sunnywithrain", src: "/assets/sunnywithrain.svg"},
    ];
    return (
        <>
            <div className="grid h-fill w-fill">
                <div className="rounded-lg shadow p-4">
                    <h2 className="text-xl font-semibold mb-4">Heutiges Wetter</h2>
                    <div className="grid grid-cols-3 w-fit h-fit gap-4 md:gap-12">
                        {['Morgens', 'Mittags', 'Abends'].map((time, index) => (
                            <ForecastDailyItem key={index} time={time} icon={weatherImg.find((img) => img.id === conditions[index].icon.toLowerCase()).src} temp={conditions[index].temp} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
