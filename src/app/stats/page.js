"use client";
import React from "react"
import {Navbar}  from "../Components"
export default function StatsPage() {
  return (
    <>
      <Navbar />
      <h1>Stats der letzten 100 Jahre</h1>
    
    <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>

</>
  );
  
}
