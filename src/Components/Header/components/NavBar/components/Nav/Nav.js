import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Nav(props) {
    const location = useLocation()
    console.log(location)

    return (
        <NavLink
            to={props.linkPage}
            className={
                location.pathname === props.linkPage ?
                "highlighted normalBtn" :
                "navLink normalBtn"
            }
        >
            {props.nameBtn}
        </NavLink>
    )
}