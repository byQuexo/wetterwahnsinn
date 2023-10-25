import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar() {
    const [History, setHistory] = useState([]);
    localStorage.setItem("history", JSON.stringify(History));
    return (
        <>
            <input type='text' placeholder='Search' className='grid h-10 w-4/5 px-5 pr-16 rounded-lg text-sm ' style={{backgroundColor: "#282828", marginTop: "0.5rem"}} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    setHistory([...History, e.target.value]);
                    localStorage.setItem("history", JSON.stringify(History));
                    e.target.value = "";
                }
            }} />
            
        </>
    );
}