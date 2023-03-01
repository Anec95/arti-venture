import 'Assets/css/page-section.css'
import { dataArticle } from 'Data/dataArticle'
import { useLocation } from 'react-router-dom'

export default function Article() {
    const location = useLocation()

    const article = dataArticle[location.state.idArticle] 

    return(
        <main className='page_main'>
            <h1 className='title_page'>{article.title}</h1>
            <h6>{article.date}</h6>
            <h5>{article.author}</h5>
        </main>
    )
}