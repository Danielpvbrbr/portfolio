/* eslint-disable react/prop-types */
//import {Container }"./styles";
import { Container } from "./styles";


export default function ViewMore(props) {
    return (
        <Container onClick={() => window.open(props.url)}>
            {props.title}
        </Container>
    )
}