"use client";
import React from "react";
import { useEffect, useState } from "react";
import "./globals.css";
import { Navbar, SearchHistory, Weather } from './Components';
import { handleSearchHistory, getSearchHistory } from "./Functions";
//make a global array for the search history
var history = ["Köln", "Bonn"];
var loc = "cologne";

function ComboboxWithAutocomplete() {
  var jsFile = require('./weatherData/countries.json');
  const states = JSON.parse(JSON.stringify(jsFile));

  const staedte = states.städte;
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (!Array.isArray(staedte)) {
      console.error("Error: 'staedte' is not an array");
      return;
    }
    if (text.length > 0) {
      matches = staedte.filter((state) => {
        const isMatch = state && state.match(new RegExp(`${text}`, "gi"));
        return isMatch;
      });
    }
    setSuggestions(matches);
    setValue(text);
  }

  const onSuggestHandler = (text) => {
    setValue(text);
    setSuggestions([]);
  }
  return (
    <>
 <input
    type="text"
    className="grid h-10 w-4/5 px-5 pr-16 rounded-lg text-sm"
    onChange={(e) => onChangeHandler(e.target.value)}
    value={value}
    style={{ backgroundColor: "#282828", marginTop: "0.5rem" }}
    placeholder="Search"
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        if(value != null && value != "" && staedte.includes(value)){
          handleSearchHistory(value);
          loc = value;
          e.target.value = "";
        }
      }
    }}
  />
  {suggestions && suggestions.length > 0 && (
    <div className="absolute z-50 bg-white p-2 text-black rounded w-auto top-10 left-22">
      {suggestions.slice(0, 5).map((suggestion, i) => (
        <div
          key={i}
          className="cursor-pointer hover:bg-gray-200 p-2"
          onClick={() => onSuggestHandler(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  )}
    </>
  );
  
}

export default function Home() {
  const [search, setSearch] = useState([]);
  return (
    <>
    <div className="relative">
    <div className="flex h-screen gap-12 min-w-min">
      <Navbar/>
      <div className="flex-1 flex flex-col min-w-min gap-4">
        <div className="flex h-20 min-w-min">
          <ComboboxWithAutocomplete />
        </div>
        <div className="flex-1 gap-2 w-fit ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 h-4/5 w-fit" style={{ position: "absolute", overflowY: "scroll" }}> 
              <SearchHistory history={history}/>
              <Weather location={loc}/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
