import React from "react"
import logo from "../images/ice-indaco.png"
import 'animate.css';

export default function Main() {
    const [menu, setMenu] = React.useState(false)
    const [listDiscipline, setListDiscipline] = React.useState(false)
    const [listCorsi, setListCorsi] = React.useState(false)

    function toggleShow() {
        setMenu(prevState => !prevState)
        console.log(menu)
    }

    function toggleShowListDiscipline() {
        setListDiscipline(prevState => !prevState)
        console.log(listDiscipline)
    }

    function toggleShowListCorsi() {
        setListCorsi(prevState => !prevState)
        console.log(listCorsi)
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
                            <p className="title-menu single-menu">Chi Siamo</p>
                        </div>
                        <div className="menu-element">
                            <div className="title-menu-container">
                                <p className="title-menu">Discipline</p>
                                <span
                                    onClick={toggleShowListDiscipline}
                                    className="material-icons-outlined expand-icon"
                                >
                                    {listDiscipline ? "expand_more" : "navigate_next"}
                                </span>   
                            </div>                                                     
                            {listDiscipline && <ul className="list-menu">
                                <li>Taralogia</li>
                                <li>Numerologia</li>
                                <li>Astrologia</li>
                                <li>Psicosintesi</li>
                                <li>Spagiria</li>
                                <li>Terapie essene</li>
                            </ul>}
                        </div>
                        <div className="menu-element">
                            <div className="title-menu-container">
                                <p className="title-menu">Corsi</p>
                                <span
                                    onClick={toggleShowListCorsi}
                                    className="material-icons-outlined expand-icon"
                                >
                                    {listCorsi ? "expand_more" : "navigate_next"}
                                </span>    
                            </div>                                                     
                            {listCorsi && <ul className="list-menu">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>}
                        </div>
                        <div className="menu-element single-menu">
                            <p className="title-menu">Bibliografia e Filmografia</p>
                        </div>
                    </nav>
                }
            </div>
            
            <div className="middle-container">                               
                <div className="association-container">
                    <h1 className="association-name">Arti Mistiche</h1>
                    <h3 className="association-slogan">Una libera ricerca olistica</h3>
                    <div className="quotes-container">
                        <p className="quotes">Il mio occhio viene da un altro universo.</p>
                        <p className="quotes">Un mondo da questo lato, uno dall'altro, io siedo sulla soglia.</p>
                        <p className="author">--Rumi</p>
                    </div> 
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