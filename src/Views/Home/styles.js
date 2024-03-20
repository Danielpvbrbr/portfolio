import styled from "styled-components";

export const Container = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const AreaProfile = styled.div`
   width:330px;
   height: 460px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

`;

export const Profile = styled.div`

    img{
        width:280px;
        height: 280px;
        border-radius: 150px;
        background: linear-gradient(to top, #6125E2, #FFA800);
        padding: 4px;
     
  }
    
`;
export const AreaInfo = styled.div`
   width:330px;
   height: 120px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h2{
    background-image: linear-gradient(to right, #6125E2, #FFA800);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #000;
    font-size: 25pt;
    margin: 4px;
    font-weight: 800;
   }

   span{
    background-image: linear-gradient(to left, #6125E2, #FFA800);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #000;
    font-size: 25pt;
    margin: 4px;
   }

   h3{
    background-image: linear-gradient(to right, #fff, #6125E2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #000;
    margin: 4px;
   }

   h4{
    color: #fff;
    margin: 4px;
   }
`;

