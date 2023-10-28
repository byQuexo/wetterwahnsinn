import React from 'react';
import { useEffect } from 'react';

export default function SearchHistory() {
    return (
        <>
        <div className="flex h-full gap-4 min-w-min">
            <div className="flex-1 flex flex-col min-w-min">
                <div className="flex h-20 min-w-min">
                    <h1>History</h1>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full md" style={{ overflowY: "scroll" }}> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}