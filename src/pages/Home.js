import { useStoreMe, setStoreMe } from 'store-me';
import styled from 'styled-components';

import Button from '../components/Button';
import Table from '../components/Table';
import Stack from '../components/Stack';
import Text from '../components/Text';
import colors from '../colorMap';

const Home = () => {
  const { hasLoadedData } = useStoreMe('hasLoadedData');

  return (
    <Wrap $backgroundColor={colors.$backgroundColor}>
      <Stack paddingTop={32} paddingBottom={48}>
        <Text text="List with cities" heading={1} weight={700} />
      </Stack>

      {hasLoadedData ? <Table /> : <Button text="Load data" onClick={() => setStoreMe({ shouldFetchData: true })} />}
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
  background-color: ${props => props.$backgroundColor};
`;
