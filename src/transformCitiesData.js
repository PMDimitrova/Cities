const transformCitiesData = data => {
  const temporary = {};

  data.map(city => {
    const id = `${city.name}-${city.area}-${city.population}`;

    temporary[id] = { ...city };
  });
  const result = Object.values(temporary);

  return result;
};

export default transformCitiesData;
