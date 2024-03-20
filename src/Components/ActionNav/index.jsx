//import {Container }"./styles";
import { Container } from "./styles";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function ActionNav() {
    return (
        <Container>
            <a href="https://linkedin.com/in/danielpvbrbr"  target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Danielpvbrbr"  target="_blank"><BsGithub /></a>
            <a href="https://wa.link/45ucgj"  target="_blank"><BsWhatsapp /></a>
            <a href="mailto:danielsantospv@gmail.com"  target="_blank"><IoMdMail /></a>
        </Container>
    )
}