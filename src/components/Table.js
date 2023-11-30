import { useStoreMe } from 'store-me';

import cities from '../_constants/cities.json';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = () => {
  const { citiesData, hasLoadedData } = useStoreMe('citiesData', 'hasLoadedData');

  return (
    <>
      <TableHeader />
      {hasLoadedData &&
        citiesData.map((city, i) => (
          <TableRow city={city} variant={i} key={city.name} isLastRow={i + 1 === cities.length} />
        ))}
    </>
  );
};

export default Table;
