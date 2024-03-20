import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    ul{
        width: 500px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-left:-30px ;
    }
`;

export const Nav = styled.li`
    color: ${props => props.color};
    font-size: 15pt;
    display: flex;
    list-style: none;
    cursor: pointer;
`;