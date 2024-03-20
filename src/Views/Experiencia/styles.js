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
   align-items: center;
  margin-top: 25px;

  ul{
    width:330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ul span{
    width:290px;
    display: flex;
    justify-content: center;
    margin: 20px 0px 25px;

    svg{
      font-size: 30pt;
    }
  }

  ul li{
    font-size: 10pt;
    color: #fff;
    font-weight: 100;
   }

  h1{
    font-size: 18pt;
    text-align: center;
    color: #7E4EE2;
    margin-bottom: 10px;
  }

  li h2{
    font-size: 17pt;
    color: #FFA800;
    margin: 0px;
    font-weight: 500;
  }

  li h3{
    font-size: 13pt;
    color: #7E4EE2;
    margin: 0px;
    font-weight: 300;
   }

   li h4{
    font-size: 14pt;
    margin-top: 4px;
    font-weight: 200;
   }

   li p{
    font-size: 12pt;
    margin:1px;
   }
  
`;


