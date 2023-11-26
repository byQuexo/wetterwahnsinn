import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster } from "@fortawesome/free-solid-svg-icons";

export default function HistoryItem({ name }) {
    return (
        <div className="rounded bg-zinc-800 flex items-center justify-between p-2 w-3/4">
            <span className="text-left text-white">{name}</span>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                <FontAwesomeIcon icon={faDumpster} />
            </button>
        </div>
    );
}
