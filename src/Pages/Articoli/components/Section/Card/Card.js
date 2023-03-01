import { NavLink } from "react-router-dom"

export default function Card(props){
    return (
        <div className="card">
            <NavLink
                to= "/articolo"
                state={{idArticle: props.id}}
            >
                <img alt="testata" className="photo-card" src={props.photo} />
                <h4>{props.title}</h4>
            </NavLink>
        </div>
    )
}