import { dataArticle } from "Data/dataArticle"
import Card from "./Card/Card"
import { useState } from "react"

export default function Section(props){
    const [expand, setExpand] = useState(false)

    const cardElements = dataArticle.map(data => {
        return <Card expand={expand} key={data.id} {...data}/>
    })

    function handleExpanse() {
        setExpand(oldValue => !oldValue)
    }

    return (
        <div className="section-container">
            <div>
                <h3 className="title-section">{props.section_name}</h3>
            </div>
            <div className="card-section">
                <p>{props.disciplina_description}</p>
                <div className={expand ? "expanded-view" : "card_container"}>
                    
                    {cardElements}
                </div>
            </div>
            
            <div className="expand">
                <p 
                    onClick={handleExpanse}
                >
                    {expand ? "Riduci" : "Espandi"}
                </p>
                <span 
                    onClick={handleExpanse}
                    class="material-icons-outlined"
                >
                    {expand ? "expand_less" : "expand_more"}
                </span>
            </div>
        </div>
    )
}