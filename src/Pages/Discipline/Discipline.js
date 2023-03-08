import "./discipline.css"
import 'Assets/css/page-section.css'
import Description from "./components/Description/Description"
import Section from "./components/Section/Section"
import dataTextSidePage from "Data/dataTextSidePage"

export default function Discipline() {
    return (
        <main className='page_main'>
            <Description />
            <Section section_name={"Tarologia"} disciplina_description={dataTextSidePage[1].disciplineText[0]} />
            <Section section_name={"Numerologia"} disciplina_description={dataTextSidePage[1].disciplineText[1]} />
            <Section section_name={"Astrologia"} disciplina_description={dataTextSidePage[1].disciplineText[2]} />
            <Section section_name={"Terapie Essene"} disciplina_description={dataTextSidePage[1].disciplineText[3]} />
        </main>
    )
}