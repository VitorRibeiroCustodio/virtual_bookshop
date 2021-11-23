// import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
}

export default App;
