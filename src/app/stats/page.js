"use client";
import React, { useState } from "react";
import { Navbar } from "../Components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import jsonData from "../weatherData/vierzigjahreweather";
import spainData from "../weatherData/Spanienweatherhistory";
import franceData from "../weatherData/Frankreichweatherhistory";
import worldData from "../weatherData/WorldWideWeatherHistory";

export default function StatsPage() {
  const [loc, setLoc] = useState("");
  let dataW;

  switch (loc.toLowerCase()) {
    case "deutschland":
      dataW = jsonData;
      break;
    case "spanien":
      dataW = spainData;
      break;
    case "frankreich":
      dataW = franceData;
      break;
    case "weltweit":
      dataW = worldData;
      break;
    default:
      dataW = jsonData;
  }

  const data = dataW.Date.map(entry => ({
    Jahr: entry.Year,
    Wärme: entry.temp,
  }));

  const countryn = dataW.country;

  return (
    <>
      <div className="flex h-screen gap-12 min-w-min">
        <Navbar />
        <div className="flex-1 flex flex-col min-w-min gap-4">
          <div className="flex h-20 min-w-min">
            <input
              type='text'
              placeholder='Search'
              className='grid h-10 w-4/5 px-5 pr-16 rounded-lg text-sm'
              style={{ backgroundColor: "#282828", marginTop: "0.5rem" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setLoc(e.target.value);
                }
              }}
            />
          </div>
          <div className="flex-1 gap-2">
          <div className="h-4/5 w-5/6" style={{ backgroundColor: "#808080", margin: "20px", padding: "20px" }}>
              <h1 style={{ color: "#000000" }}>Stats der letzten 50 Jahre: {countryn}</h1>
              <LineChart
                width={1150}
                height={450}
                data={data}
                margin={{ top: 20, right: 50, bottom: 50, left: 0 }}
                style={{ backgroundColor: "#f0f0f0", padding: "8px", borderRadius: "12px" }}>
                <Line type="monotone" dataKey="Wärme" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="Jahr" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
