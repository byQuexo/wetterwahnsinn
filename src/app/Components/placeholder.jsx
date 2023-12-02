import React from "react";

export default function Placeholder() {
  return (
    <>
    <div className="grid grid-row-2 w-fit h-fit">
        <div className="grid gris-cols-2 w-48 h-fit divide-y divide-y-2 divide-solid divide-zinc-800 gap-2 justify-items-center">
            <div className="grid grid-col-1 h-fit w-56 md:w-80 lg:w-96" />  
            <div className="grid grid-col-2 h-fit w-56 md:w-80 lg:w-96" />
        </div>
    </div>
    </>
  )
}