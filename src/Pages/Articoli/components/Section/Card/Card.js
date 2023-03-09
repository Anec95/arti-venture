import { NavLink } from "react-router-dom"
import photo from "Assets/img/photo_article/3-cime-autumn-2021.JPG"

export default function Card(props){
    return (
        <div className={props.expand ? "card-article card_expanded" : "card-article card_in_hole"}>
            <NavLink
                to= "/articolo"
                state={{idArticle: props.id}}
            >
                <img alt="testata" className="photoArticle-card" src={photo} />
                <div className="titleArticle-card">
                    <h4>{props.title}</h4>
                    <h6>{props.author}</h6> 
                </div>
            </NavLink>
            <p className="abstractArticle_card">{props.abstract}</p>
        </div>
    )
}