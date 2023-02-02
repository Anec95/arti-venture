import React from "react"
import "../index.css"
import "./homepage.css"
import Main from "./Main"
import Schedule from "./Schedule"
import dataText from "./dataText"

export default function Homepage() {
    const scheduleElements = dataText.map(data => {
        return <Schedule key={data.id} {...data}/>
    })
    return (
        <>
            <Main />
            {scheduleElements}
        </>
    )
}