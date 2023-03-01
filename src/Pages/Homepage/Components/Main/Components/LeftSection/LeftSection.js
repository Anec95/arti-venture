import { useState } from "react"
import { NavLink } from "react-router-dom"
import ComplexBtn from "./Components/ComplexButton"

export default function LeftSection() {
    
    const [menu, setMenu] = useState(false)

    function toggleShow() {
        setMenu(prevState => !prevState)
        console.log(menu)
    }

    return (        
        <div className={menu ? "showed-menu menu-container" : "menu-container"}>
                <span
                    onClick={toggleShow}
                    className={menu ? "material-icons-outlined menu-icon menu-icon-showed" : "material-icons-outlined menu-icon"}
                >
                    widgets
                </span>
                {menu &&
                    <nav className="navbar">
                        <NavLink
                            to="chi_siamo"
                            className="menu-element"
                        >
                            <p className="title-menu single-menu">Chi Siamo</p>
                        </NavLink>
                        <ComplexBtn arrayNumber={0} />
                        <NavLink
                            to="/articoli"
                            className="menu-element"
                        >
                            <p className="title-menu single-menu">Articoli</p>
                        </NavLink>
                        {/* <ComplexBtn arrayNumber={1} /> */}
                        <NavLink
                            to="/bibliografia_e_filmografia"
                            className="menu-element"
                        >
                            <p className="title-menu single-menu">Bibliografia e Filmografia</p>
                        </NavLink>
                    </nav>
                }
            </div>
    )
}