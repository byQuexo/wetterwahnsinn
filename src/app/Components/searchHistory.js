import React from "react";
import { useEffect } from "react";
import "../globals.css";
import { HistoryItem } from ".";

export default function searchHistory({ history }) {
  return (
    <div className="flex flex-col gap-2 w-fill min-w-min h-48">
      <h1 className="text-2xl font-bold">Search History</h1>
      <div className="flex flex-col gap-2 overflow-y-scroll">
        {history.map((item, index) => (
          <HistoryItem key={index} name={item} />
       ))}
       </div>
    </div>
  );
}
