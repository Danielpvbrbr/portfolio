import styled from "styled-components";

export const Container = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AreaInfo = styled.div`
   width:70vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 25px;

  h1{
    font-size: 18pt;
    text-align: center;
    color: #7E4EE2;
    margin-bottom: 10px;
  }

  h3{
    font-size: 11pt;
    color: #fff;
    margin: 0px;
    font-weight: 200;
   }

   h4{
    font-size: 10pt;
    color: #fff;
    margin-top: 4px;
    font-weight: 200;
   }
   span{
    font-size: 11pt;
    color: #FFA800;
   }
  li{
    font-size: 10pt;
    color: #fff;
    font-weight: 100;
   }
`;


