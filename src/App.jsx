import styled from 'styled-components';
import Navaigation from './Components/Navigation';
import Routes from './Views/Routes';
import ActionNav from "./Components/ActionNav";

function App() {

  return (
    <Container>
      <Navaigation />
      <Area>
        <Routes />
      </Area>
      <ActionNav />
    </Container>
  )
}

export default App

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Area = styled.div`
    width: 70vw ;
    display: flex;
    flex-direction: column;
    align-items: center;
`;