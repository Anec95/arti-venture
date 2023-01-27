import React from "react"
import logo from "../images/melanzana.png"
import 'animate.css';

export default function Main() {
    return (
        <main className="homepage-main">
            <div>
                <img className="animate__animated animate__zoomIn" src={logo} alt="logo arti mistiche" />
            </div>
        </main>
    )
}