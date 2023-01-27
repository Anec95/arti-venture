import React from "react"
import {NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="footer-menu">            
            <NavLink
                to="/"
                className="link-bio animate__animated animate__zoomInUp"
            >
                Chi siamo
            </NavLink>
            <div className="menu-element animate__animated animate__zoomInUp">
                <p className="title-type">Corsi</p>
                <div className="nav-container">
                    <div className="container-link">
                        <NavLink to="/" className="link-activities first-link">Corso 1</NavLink>
                        <NavLink to="/" className="link-activities">Corso 2</NavLink>
                        <NavLink to="/" className="link-activities">Corso 3</NavLink>
                        <NavLink to="/" className="link-activities">Corso 4</NavLink>
                        <NavLink to="/" className="link-activities">Corso 5</NavLink>
                    </div>
                </div>
            </div>
            <div className="menu-element animate__animated animate__zoomInUp">
                <p className="title-type">Attività</p>
                <div className="nav-container">
                    <div className="container-link">
                        <NavLink to="/" className="link-activities first-link">Attività 1</NavLink>
                        <NavLink to="/" className="link-activities">Attività 2</NavLink>
                        <NavLink to="/" className="link-activities">Attività 3</NavLink>
                        <NavLink to="/" className="link-activities">Attività 4</NavLink>
                        <NavLink to="/" className="link-activities">Attività 5</NavLink>
                    </div>
                </div>
            </div>
            <div className="menu-element animate__animated animate__zoomInUp">
                <p className="title-type">Pratiche</p>
                <div className="nav-container">
                    <div className="container-link">
                        <NavLink to="/" className="link-activities first-link">Pratica 1</NavLink>
                        <NavLink to="/" className="link-activities">Pratica 2</NavLink>
                        <NavLink to="/" className="link-activities">Pratica 3</NavLink>
                        <NavLink to="/" className="link-activities">Pratica 4</NavLink>
                        <NavLink to="/" className="link-activities">Pratica 5</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}