import React from "react";

export default function ForecastDailyItem({time, icon, temp}) {

    return (
        <>
        <div className="flex flex-col gap-4 items-center w-fit">
            <span className="text-left text-white">{time}</span>
            <img className="w-14 h-14 md:w-24 md:h-24" src={icon} alt={time} />
            <span className="text-white text-bold w-fit">{temp}</span>
        </div>
        </>
    )
}