import Nav from "./components/Nav/Nav"
import { NavLink, useLocation, useNavigate } from "react-router-dom"


export default function NavBar() {
    const location = useLocation()
    const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}
    return (
        <div className="nav-container">
            {location.pathname === "/articolo" && (<div onClick={goBack}>
                <span className="material-icons-outlined back-link">
                    arrow_back_ios
                </span>
            </div>)}
            <NavLink
                to="/"
                className="home-link"
            >
                <span className="material-icons-outlined home-link">
                    home
                </span>
            </NavLink>
            <Nav
                linkPage={"/chi_siamo"}
                nameBtn={"Chi Siamo"}
            />
            <Nav
                linkPage={"/discipline"}
                nameBtn={"Discipline"}
            />
            <Nav
                linkPage={"/articoli"}
                nameBtn={"Articoli"}
            />
        </div>
    )
}