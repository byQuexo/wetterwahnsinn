"use strict";
import React from 'react';
import { useEffect, useState } from 'react';
import "../globals.css";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [visability, setVisability] = useState("hidden");
    const [visBar, setVisbar] = useState("visible");
    return (
        <>
        <div className="grid w-20 h-screen border-gray-100 dark:border-gray-700">
            <div style={{ visibility: visBar, width: visBar === "hidden" ? 0 : "auto", height: visability === "hidden" ? 0 : "auto" }}>
                <FontAwesomeIcon icon={faBars} size="lg" height={20} style={{ marginLeft: "1rem", marginTop: "1rem"}} onClick={() => {
                    setVisability(visability === "hidden" ? "visible" : "hidden");
                    setVisbar(visBar === "hidden" ? "visible" : "hidden");
                }}/>
            </div>
                <nav className="-mr-1 flex flex-col space-y-2 gap-4 h-full w-20" style={{backgroundColor: "#282828", visibility: visability, position: "absolute", top: 0, left: 0}}>
                    <div className="grid w-auto justify-items-center" style={{ marginTop: "1rem"}}>
                        <img src="/logo.png" alt="Avatar" className="rounded-full " style={{ height: "48px", width: "48px"}}/>
                    </div>
                    <div className="grid grid-cols-1 text-center gap-y-2">
                        <div className='grid h-20 gap-2 w-auto justify-items-center'>
                            <FontAwesomeIcon icon={faHome} size="lg" height={20} onClick={() => {
                                window.location.href = "/";
                            }}/>
                            <FontAwesomeIcon icon={faChartLine} size="lg" height={20} onClick={() => {
                                window.location.href = "/stats";
                            }}/>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 h-full">
                        <div className='grid row-span-1 w-auto justify-items-center place-items-end'>
                            <FontAwesomeIcon icon={faXmark} size="lg" height={20} onClick={() => {
                                setVisability(visability === "hidden" ? "visible" : "hidden");
                                setVisbar(visBar === "hidden" ? "visible" : "hidden");;
                            }} style={{ marginBottom: "2rem"}}/></div>
                    </div>
                </nav>
            </div>
        </>
    );
}
