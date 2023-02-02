import React from "react"
import logo from "../images/ice-indaco.png"
import 'animate.css';

export default function Main() {
    const [menu, setMenu] = React.useState(false)

    function toggleShow() {
        setMenu(prevState => !prevState)
        console.log(menu)
    }

    return (
        <main className="homepage-main">
            <div className={menu ? "showed-menu menu-container" : "menu-container"}>
                <span
                    onClick={toggleShow}
                    className={menu ? "material-icons-outlined menu-icon menu-icon-showed" : "material-icons-outlined menu-icon"}
                >
                    widgets
                </span>
                {menu &&
                    <nav className="navbar">
                        <div className="menu-element">
                            <p className="title-menu">Chi Siamo</p>
                        </div>
                        <div className="menu-element">
                            <p className="title-menu">Discipline</p>
                            <span class="material-icons-outlined expand-icon">
                                expand_more
                            </span>
                        </div>
                        <div className="menu-element">
                            <p className="title-menu">Corsi</p>
                            <span class="material-icons-outlined expand-icon">
                                expand_more
                            </span>
                        </div>
                        <div className="menu-element">
                            <p className="title-menu">Bibliografia e Filmografia</p>
                        </div>
                    </nav>
                }
            </div>
            
            <div className="middle-container">
                {/* <div className="quotes-container">
                    <p className="quotes">Il mio occhio viene da un altro universo.</p>
                    <p className="quotes">Un mondo da questo lato, uno dall'altro, io siedo sulla soglia.</p>
                    <p className="quotes">Sulla soglia stanno coloro il cui linguaggio è il silenzio.</p>
                    <p className="author">--Rumi</p>
                </div>                 */}
                <div className="association-container">
                    <h1 className="association-name">Arti Mistiche</h1>
                    <h3 className="association-slogan">Una libera ricerca olistica</h3>
                </div>
                <div className="animate__animated animate__bounce scroll-down-container">
                    <p className="scroll">Scroll Down</p>
                    <span className="material-icons-outlined arrow-down-icon">
                        keyboard_arrow_down
                    </span>
                </div>                
            </div>
            <div className="right-section">
                <img className="animate__animated animate__zoomIn logo-img" src={logo} alt="logo arti mistiche" />
            </div>
        </main>
    )
}