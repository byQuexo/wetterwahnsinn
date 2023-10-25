"use strict";
import React from 'react';
import "../globals.css";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <>
            <div className="absolute w-20 h-screen border-gray-100 dark:border-gray-700" style={{backgroundColor: "#282828"}}>
                <nav className="-mr-1 flex flex-col space-y-2 gap-4 h-max">
                    <img src="/logo.png" alt="Avatar" className="rounded-full w-16 space-y-3" style={{marginTop: "1rem", marginLeft: "1rem", height: "48px", width: "48px"}}/>
                    <div className="grid grid-cols-1 text-center gap-y-5">
                        <div><FontAwesomeIcon icon={faHome} size="lg" height={20} onClick={() => {
                            window.location.href = "/";
                        }}/></div>
                        <div><FontAwesomeIcon icon={faChartLine} size="lg" height={20} onClick={() => {
                            window.location.href = "/stats";
                        }}/></div>
                        <div><FontAwesomeIcon icon={faChartLine} size="lg" height={20}/></div>
                    </div>
                </nav>
            </div>
        </>
    );
}
