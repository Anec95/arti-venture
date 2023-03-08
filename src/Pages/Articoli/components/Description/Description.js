import dataTextSidePage from "Data/dataTextSidePage"

export default function Description(){
    const texts = dataTextSidePage[2]
    return (
        <div className="description_page">
            <h1 className='title_page'>{texts.title}</h1>
            <p>{texts.description}</p>
        </div>
    )
}