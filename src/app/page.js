"use client";
import React from "react";
import { useEffect, useState } from "react";
import "./globals.css";
import { Navbar,SearchHistory, Weather } from './Components';

export default function Home() {
  const [loc, setLoc] = useState("cologne");
  const [history, setHistory] = useState(["cologne"]); // [ { location: "cologne", date: "2021-10-10" }
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
        <div className="flex-1 gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-4/5 w-5/6" style={{ position: "absolute", overflowY: "scroll" }}> 
              <SearchHistory />
              <Weather location={loc}/>
            </div>
        </div>
      </div>
    </div>
    </> 
  );
}
