const appState = {
  shouldFetchData: false,
  hasLoadedData: false,
};

const appData = {
  citiesData: [],
};

const generateInitialState = () => {
  const stateMap = {
    ...appState,
    ...appData,
  };

  return stateMap;
};

export default generateInitialState;
