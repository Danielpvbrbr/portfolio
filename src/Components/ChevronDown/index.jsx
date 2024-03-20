/* eslint-disable react/prop-types */
//import {Container }"./styles";
import { useContext } from "react";
import { Container } from "./styles";
import { BsChevronDown } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthContext";

export default function ChevronDown(props) {
    const { setRoute } = useContext(AuthContext);

    return (
        <Container onClick={() => setRoute(props.route)}>
            <BsChevronDown color="#7E4EE2" />
            <BsChevronDown color="#FFA800" />
        </Container>
    )
}