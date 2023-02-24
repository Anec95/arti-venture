import React from "react"
import 'animate.css';
import MiddleSection from "./Components/MiddleSection/MiddleSection"
import RightSection from "./Components/RightSection/RightSection"
import LeftSection from "./Components/LeftSection/LeftSection"


export default function Main() {
    return (
        <main className="homepage-main">
            <LeftSection />          
            <MiddleSection />
            <RightSection />
        </main>
    )
}