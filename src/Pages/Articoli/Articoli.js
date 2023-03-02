import './articoli.css'
import 'Assets/css/page-section.css'
import Description from './components/Description/Description'
import Section from './components/Section/Section'

export default function Articoli() {
    return (
        <main className='page_main'>
            <Description />
            <Section section_name={"Tarologia"}/>
            <Section section_name={"Nomerologia"}/>
            <Section section_name={"Astrologia"}/>
            <Section section_name={"Terapie Essene"}/>
        </main>
    )
}