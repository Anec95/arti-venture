import React from "react"
import { NavLink } from "react-router-dom"

export default function Schedule(
    {classe, title, description, title2, description2, title3, description3, link}
) {
    return (
        <section className={classe}>
            <h1>{title}</h1>
            <p>{description}</p>
            <hr />
            {title2 && <h3>{title2}</h3>}
            {description2 && <p>{description2}</p>}
            {description2 && <hr />}
            {title3 && <h3>{title3}</h3>}
            {description3 && <p>{description3}</p>}
            {description3 && <hr />}
            <NavLink
                to={link}            
            >
                Scopri di più
            </NavLink>
        </section>
    )
}