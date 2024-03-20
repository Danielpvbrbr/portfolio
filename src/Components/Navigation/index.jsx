import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Container, Nav } from "./styles";

export default function Navaigation() {
    const { route, setRoute, isMobile } = useContext(AuthContext);

    const AlterColor = (routeActive) => {
        if (routeActive == route) {
            return "#6125E2"
        } else {
            return "#fff"
        }
    }

    return (
        <Container>
            {isMobile && <ul>
                <Nav color={AlterColor("Home")} onClick={() => setRoute("Home")}>Home</Nav>
                <Nav color={AlterColor("Sobre")} onClick={() => setRoute("Sobre")}>Sobre</Nav>
                <Nav color={AlterColor("Experiencia")} onClick={() => setRoute("Experiencia")}>Experiência</Nav>
                <Nav color={AlterColor("Projetos")} onClick={() => setRoute("Projetos")}>Projetos</Nav>
                <Nav color={AlterColor("Contato")} onClick={() => setRoute("Contato")}>Contato</Nav>
            </ul>}
        </Container>
    )
}