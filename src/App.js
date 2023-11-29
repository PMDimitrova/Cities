import styled from 'styled-components';

import Home from './pages/Home';

function App() {
  return (
    <Wrap>
      <Home />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
`;
