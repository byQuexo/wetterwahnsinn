"use strict";
import React, { useEffect, useState } from "react";
import { getWeather } from "@functions/index.js";

export default function WeatherPage() {
    //
    const data = getWeather("köln");
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    return (
        <>
            <div className="flex h-full w-full gap-4 min-w-min">
                <div className="flex-1 flex h-56 w-full bg-zinc-700 rounded">
                    <h1 className="text-4xl font-bold text-white">Weather</h1>
                </div>
            </div>
            
        </>
    );

}
