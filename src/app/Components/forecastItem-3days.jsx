import React from "react"

export default function ForecastItem({day, icon, tempmin, tempmax, description}) {
    return (
        <>
        <div className="flex flex-row gap-4 items-center w-fit">
            <span className="text-left text-white text-bold md:text-xl">{day}</span>
            <img className="w-14 h-14 md:w-20 md:h-20" src={icon} alt={day} />
            <span className="text-white w-fit text-bold md:text-xl">{description}</span>
            <span className="text-left text-white md:text-lg">{tempmin}</span>
            <br />
            <span className="text-left text-white md:text-lg">{tempmax}</span>
        </div>
        </>
    )
}