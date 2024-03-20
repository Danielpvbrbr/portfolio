import styled from "styled-components";

export const Container = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AreaInfo = styled.div`
   width:270px;
   display: flex;
   flex-direction: column;
   justify-content: center;

  h1{
    font-size: 18pt;
    color: #7E4EE2;
    margin-bottom: 20pt;
  }

   a{
    color: #fff;
    font-size: 15pt;
    margin: 4px;
    font-weight: 100;
    text-decoration: none;
   }

   svg{
    font-size: 11pt;
    align-self: center;
   }
`;


