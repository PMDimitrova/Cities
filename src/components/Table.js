import { useStoreMe } from 'store-me';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = () => {
  const { citiesData, hasLoadedData } = useStoreMe('citiesData', 'hasLoadedData');
  const countOfCities = hasLoadedData ? citiesData.length : 0;

  return (
    <>
      <TableHeader />
      {hasLoadedData &&
        citiesData.map((city, i) => (
          <TableRow city={city} variant={i} key={city.name} isLastRow={i + 1 === countOfCities} />
        ))}
    </>
  );
};

export default Table;
