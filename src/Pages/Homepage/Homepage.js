import React from "react"
import "../../index.css"
import "../../Assets/css/homepage.css"
import Main from "./Components/Main/Main"
import Schedule from "./Components/Schedule/Schedule"
import dataTextHomepage from "../../Data/dataTextHomepage"

export default function Homepage() {
    const scheduleElements = dataTextHomepage.map(data => {
        return <Schedule key={data.id} {...data}/>
    })
    return (
        <>
            <Main />
            {scheduleElements}
        </>
    )
}