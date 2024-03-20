//import {Container }"./styles";
import { Container, AreaInfo } from "./styles";
import { BsLinkedin, BsGithub, BsWhatsapp, BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import ChevronDown from "../../Components/ChevronDown";

export default function Contato() {

    return (
        <Container>
            <AreaInfo>
                <h1> Experiência</h1>

                <a><BsTelephoneFill /> (32) 99132-2755</a>
                <a href="https://wa.link/45ucgj"  target="_blank"><BsWhatsapp /> wa.link/45ucgj</a>
                <a href="mailto:danielsantospv@gmail.com"  target="_blank"><IoMdMail /> danielsantospv@gmail.com</a>
                <a href="https://github.com/Danielpvbrbr"  target="_blank"><BsGithub /> github.com/Danielpvbrbr</a>
                <a href="https://linkedin.com/in/danielpvbrbr"  target="_blank"><BsLinkedin /> linkedin.com/in/danielpvbrbr</a>
            </AreaInfo>
            <ChevronDown route="Home"/>
        </Container>
    )
}