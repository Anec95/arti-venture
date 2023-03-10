import dataTextSidePage from "Data/dataTextSidePage"

export default function Description(){
    const texts = dataTextSidePage[1]
    return (
        <div className="description_page">
            <h1 className='title_page'>{texts.title}</h1>
            <p>{texts.description}</p>
            <h3>{texts.title2}</h3>
            <p>{texts.description2}</p>
        </div>
    )
}