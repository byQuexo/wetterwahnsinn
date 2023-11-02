import React from 'react';
import { useEffect } from 'react';

export default function searchHistory({ history }) {
    return (
        <>
        <div className="flex h-35 w-56 gap-4 min-w-min">
            <div className="flex-1 flex flex-col min-w-min">
                <div className="flex h-20 min-w-min">
                    <h1>History</h1>
                </div>
                <div className="flex-1 h-24" style={{ overflowY: "scroll", overflow: "scroll", overflowX: "hidden" }}>
                    <div className="grid grid-cols-1 gap-1 h-fill" style={{ overflowY: "scroll", overflow: "scroll", overflowX: "hidden" }}> 
                        {history.map((item, index) => {
                            return (
                                <div className="flex h-fill min-w-min" key={index}>
                                    <h1>{item}</h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}