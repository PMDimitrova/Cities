import { useStoreMe, setStoreMe } from 'store-me';
import { useEffect } from 'react';

import transformCitiesData from './transformCitiesData';
import apiServices from './services/apiServices';

const AppHandler = () => {
  const { shouldFetchData } = useStoreMe('shouldFetchData');

  useEffect(
    function loadData() {
      if (shouldFetchData) {
        apiServices
          .getCitiesData()
          .then(res => {
            const citiesData = transformCitiesData(res.data);

            setStoreMe({
              hasLoadedData: true,
              shouldFetchData: false,
              citiesData,
            });
          })
          .catch(err => err);
      }
    },
    [shouldFetchData]
  );
};

export default AppHandler;
