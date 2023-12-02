import React from "react"

export default function ForecastItem({day, icon, tempmin, tempmax, description}) {
    return (
        <>
        <div className="flex flex-row gap-4 items-center w-fit">
            <span className="text-left text-white">{day}</span>
            <img className="w-14 h-14" src={icon} alt={day} />
            <span className="text-white w-fit">{description}</span>
            <span className="text-left text-white">{tempmin}</span>
            <br />
            <span className="text-left text-white">{tempmax}</span>
        </div>
        </>
    )
}