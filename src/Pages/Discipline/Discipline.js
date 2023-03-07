import "./discipline.css"
import 'Assets/css/page-section.css'
import Description from "./components/Description/Description"
import Section from "./components/Section/Section"

export default function Discipline() {
    return (
        <>
            <Description />
            <Section section_name={"Tarologia"}/>
            <Section section_name={"Nomerologia"}/>
            <Section section_name={"Astrologia"}/>
            <Section section_name={"Terapie Essene"}/>
        </>
    )
}