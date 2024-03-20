import styled, {  } from "styled-components";

export const Container = styled.div`
    width: 30px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 20px;
    top: 40vh;

    svg{
        color: #fff;
        font-size: 25px;
        cursor: pointer;
    }
    svg:hover{
        color: #FFA800;
        font-size: 26px;
        cursor: pointer;
    }
`;
