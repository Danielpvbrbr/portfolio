//import {Container }"./styles";
import { Container, AreaInfo } from "./styles";
import { BsArrowDown } from "react-icons/bs";
import ChevronDown from "../../Components/ChevronDown";

export default function Experiencia() {

    return (
        <Container>
            <AreaInfo>
                <h1>Experiência</h1>
                <ul>
                    <li>
                        <h2>Desenvolvedor - Estágio</h2>
                        <h3>Esdeva Marketing Omnichannel</h3>
                        <p>out de 2020 - mai de 2021 · 8 meses</p>
                        <h4>Juiz de Fora, Minas Gerais, Brasil · Híbrida</h4>
                    </li>

                    <span>
                        <BsArrowDown  color="#7E4EE2"/>
                    </span>

                    <li>
                        <h2>Analista de Suporte de TI</h2>
                        <h3>Virtual Telecom</h3>
                        <p> out de 2021 - o momento · 2 anos 6 meses</p>
                        <h4>Juiz de Fora, Minas Gerais, Brasil · Remota</h4>
                    </li>
                </ul>
            </AreaInfo>
            <ChevronDown route="Projetos"/>
        </Container>
    )
}