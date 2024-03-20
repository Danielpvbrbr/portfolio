/* eslint-disable react/prop-types */
import { useContext } from "react"
//import {Container }"./styles";
import { Container, AreaTiTle, AreaInfo } from "./styles";
import { AuthContext } from "../../Context/AuthContext";
export default function CardProject(props) {
    const { isMobile } = useContext(AuthContext);

    return (
        <Container onClick={() => window.open(props.data.url)} width={isMobile ? "100%" : "400px"}>
            <AreaTiTle>
                <h1>{props.data.title}</h1>
                <h4>{props.data.languages}</h4>
            </AreaTiTle>
            <AreaInfo>
                <p>{props.data.desc}</p>
                <span>{props.data.used}</span>
            </AreaInfo>
        </Container >
    )
}