import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster } from "@fortawesome/free-solid-svg-icons";
import "../globals.css";

export default function HistoryItem({ name, onRemove }) {
    return (
        <div className="rounded bg-zinc-800 flex items-center justify-between p-2 w-64 md:w-64 lg:w-96">
            <span className="text-left text-white">{name}</span>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => onRemove(name)}>
                <FontAwesomeIcon icon={faDumpster}/>
            </button>
        </div>
    );
}
