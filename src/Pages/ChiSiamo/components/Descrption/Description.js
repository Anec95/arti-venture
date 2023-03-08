import dataTextSidePage from "Data/dataTextSidePage"

export default function Description() {
    const texts = dataTextSidePage[0]
    return (
        <div className="description_page">
            <h1 className='title_page'>{texts.title}</h1>
            <h3>{texts.subtitle}</h3>
            <p>{texts.description}</p>
            <h3>{texts.title2}</h3>
            <p>{texts.description2}</p>
            <h3>{texts.title3}</h3>
            <p>{texts.description3}</p>
            <h3>{texts.title4}</h3>
            <p>{texts.description4}</p>
        </div>
    )
}