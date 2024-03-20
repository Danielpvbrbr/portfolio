import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Home from "./Home";
import Sobre from "./Sobre";
import Experiencia from "./Experiencia";
import Projetos from "./Projetos";
import Contato from "./Contato";



export default function Routes() {
    const { route } = useContext(AuthContext);

    const RouteActive = () => {
        switch (route) {
            case "Home": return <Home/>
            case "Sobre": return <Sobre/>
            case "Experiencia": return <Experiencia/>
            case "Projetos": return <Projetos/>
            case "Contato": return <Contato/>
        }
    }

    return (
        <>
            {RouteActive()}
        </>

    )
}