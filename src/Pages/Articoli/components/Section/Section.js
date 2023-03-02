import { dataArticle } from "Data/dataArticle"
import Card from "./Card/Card"
import { useState } from "react"

export default function Section(props){
    const cardElements = dataArticle.map(data => {
        return <Card key={data.id} {...data}/>
    })

    const [expand, setExpand] = useState(false)

    function handleExpanse() {
        setExpand(oldValue => !oldValue)
    }

    return (
        <div>
            <div>
                <h3 className="title-section">{props.section_name}</h3>
            </div>
            <div className={expand ? "expanded-view" : "cardSection_container"}>
                {cardElements}
            </div>
            <div
                onClick={handleExpanse}
                className="expand"
            >
                <p>{expand ? "Riduci" : "Espandi"}</p>
                <span class="material-icons-outlined">
                    {expand ? "expand_less" : "expand_more"}
                </span>
            </div>
        </div>
        
    )
}