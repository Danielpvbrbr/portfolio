//import {Container }"./styles";
import { Container, AreaInfo } from "./styles";
import ChevronDown from "../../Components/ChevronDown";

export default function Home() {

    return (
        <Container>
            <AreaInfo>
                <h1>Sobre mim</h1>
                <h3>Um pouco sobre mim, sou programador web/móbile/desktop,formado em Análise de sistema, na Universidade Estácio,
                    Tenho
                    mais de 3 anos de experiência na programação.
                    Hoje considero que
                    conheço uma ampla gama de estrutura,
                    na qual é mais utilizada
                    para solucionar problemas.
                    Tenho foco na linguagem C# utilizando o framework .NET,
                    EntityFramework, SQL usando o banco de dados SQL Server e
                    SQLite, sempre prestando um bom ótimo serviço, compromisso e
                    seriedade, valorizando princípios que considero primordial tanto
                    pessoal como profissional
                </h3>
                <h1>Habilidades</h1>
                <h4>
                    <span>APIs</span>
                    <ul>
                        <li>Web APIs REST (C#)</li>
                        <li>MinimalAPIs(C#)</li>
                        <li>Swagger /PostMan</li>
                        <li>Asp.Net (MVC)</li>
                        <li>Nodejs(JavaScript)</li>
                    </ul>
                    <span>WEB</span>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Bootstrap</li>
                        <li>Asp.Net (MVC)</li>
                        <li>Reactjs</li>
                    </ul>

                    <span>APP</span>
                    <ul>
                        <li>React Native</li>
                    </ul>

                    <span>DESKTOP</span>
                    <ul>
                        <li>C# - WinForms</li>
                        <li>JavaScript - Electron</li>
                    </ul>

                    <span>BANCO DE DADOS</span>
                    <ul>
                        <li>ORM(EntityFramework Core)</li>
                        <li>SQL Server</li>
                        <li>SQLite</li>
                        <li>MySql</li>
                    </ul>

                    <span>METODOLOGIA ÁGIL</span>
                    <ul>
                        <li>SCRUM</li>
                    </ul>
                </h4>
            </AreaInfo>
            <ChevronDown route="Experiencia"/>
        </Container>
    )
}