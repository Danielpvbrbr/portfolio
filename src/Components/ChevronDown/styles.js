import styled, { keyframes } from "styled-components";

const animated = keyframes`
  from {
    bottom: 45px;
  }

  to {
    bottom: 37px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40px;
    animation: ${animated} 1s linear infinite;

    svg{
        font-size: 40px;
        cursor: pointer;
        margin-bottom: -28px;
    }
`;
