//import {Container }"./styles";
import { Container } from "./styles";
import CardProject from "../../Components/CardProject";
import ViewMore from "../../Components/ViewMore";
import projects from "./projects.json";
import ChevronDown from "../../Components/ChevronDown";

export default function Projetos() {

    return (
        <Container>
            <h2>Projetos</h2>
            {projects.data.map((v, i) =>
                <CardProject key={i} data={v} />
            )}
            <ViewMore title="Ver Mais" url="https://github.com/Danielpvbrbr?tab=repositories"/>
            <ChevronDown route="Contato"/>
        </Container>
    )
}