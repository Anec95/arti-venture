import './chi-siamo.css'
import 'Assets/css/page-section.css'
import Contacts from './components/Contacts/Contacts'
import Description from './components/Descrption/Description'

export default function ChiSiamo() {
    return (
        <main className='page_main'>
            <Description />
            <Contacts />
        </main>
    )
}