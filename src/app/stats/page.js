"use client";
import React from "react";
import {Navbar}  from "../Components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function StatsPage() {
  const data = [{name: '2023', Wärme: 33, pv: 2400, amt: 2400}, 
  {name: '2022', Wärme: -12, pv: 2400, amt: 2400}, 
  {name: '2021', Wärme: 10, pv: 2400, amt: 2400}, 
  {name: '2021', Wärme: 15, pv: 2400, amt: 2400}, 
  {name: '2021', Wärme: 23, pv: 2400, amt: 2400}];

  return (
    <>
  <div className="flex h-screen gap-12 min-w-min">
  <Navbar/>
  <div className="flex-1 flex flex-col min-w-min gap-4">
    <div className="flex h-20 min-w-min">
    <input
            type='text'
            placeholder='Search'
            className='grid h-10 w-4/5 px-5 pr-16 rounded-lg text-sm'
            style={{ backgroundColor: "#282828", marginTop: "0.5rem" }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.target.value = "";
                    setLoc(e.target.value);
                }
            }}
        />
    </div>
    <div className="flex-1 gap-2" >
        <div className="h-4/5 w-5/6" style={{ overflowY: "scroll" }} > 
          <h1>Stats der letzten 100 Jahre: Deutschland</h1>
          <LineChart 
          width={1150} 
          height={500} 
          data={data} 
          margin={{ top: 15, right: 50, bottom: 5, left: 0 }} 
          style={{ backgroundColor: "#f0f0f0", padding: "8px", borderRadius: "12px" }}>
            <Line type="monotone" dataKey="Wärme" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
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
