import React from "react"
import logo from "../images/melanzana.png"
import 'animate.css';

export default function Main() {
    return (
        <main className="homepage-main">
            <img className="animate__animated animate__zoomIn" src={logo} alt="logo arti mistiche" />
            <div className="animate__animated animate__bounce container-scroll">
                <p className="scroll">Scroll Down</p>
                <span className="material-icons-outlined">
                    keyboard_arrow_down
                </span>
            </div>
        </main>
    )
}