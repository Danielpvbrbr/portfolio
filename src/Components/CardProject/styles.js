import styled from "styled-components";

export const Container = styled.section`
    width: ${props => props.width}; 
    height: 120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #310099;
    border-radius:8px;
    cursor: pointer;
    margin: 5px;
`;
export const AreaTiTle = styled.div`
    width: 140px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 8pt;
      text-align: center;
      margin: 0;
      padding: 2px;
      
    }
    
    h4{
      color: #FFA800;
      font-size: 9pt;
      margin: 0;
    }
`;
export const AreaInfo = styled.div`
    width: 390px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius:8px;
    padding: 4px;
    margin-right: 4px;
   
    p{
      font-size: 10pt;
      font-weight: 400;
      color: #000;
      height: 100px;
      margin: 0;
      width: 100%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span{
      color: #7E4EE2;
      font-size: 8pt;
    }
`;
