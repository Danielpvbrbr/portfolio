//import {Container }"./styles";
import { Container, AreaProfile, Profile, AreaInfo} from "./styles";
import my from "../../assets/my.png";
import ViewMore from "../../Components/ViewMore";
import ChevronDown from "../../Components/ChevronDown";

export default function Home() {
    return (
        <Container>
            <AreaProfile>
                <Profile>
                    <img src={my} alt="Minha foto" />
                </Profile>
                <AreaInfo>
                    <h4>Olá, Meu nome è</h4>
                    <h2>Daniel <span>Nascimento</span></h2>
                    <h3>Desenvolvedor Full Stack</h3>
                </AreaInfo>
                <ViewMore title="Ver Mais" url="https://github.com/Danielpvbrbr?tab=repositories"/>
            </AreaProfile>
            <ChevronDown route="Sobre"/>
        </Container>
    )
}