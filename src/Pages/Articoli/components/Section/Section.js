import { dataArticle } from "Data/dataArticle"
import Card from "./Card/Card"

export default function Section(){
    const cardElements = dataArticle.map(data => {
        return <Card key={data.id} {...data}/>
    })

    return (
        <div>
            <div>
                <h3 className="title-section">Tarologia</h3>
            </div>
            <div className="cardSection_container">
                {cardElements}
            </div>
        </div>
        
    )
}