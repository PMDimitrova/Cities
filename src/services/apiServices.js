import axios from 'axios';

const endpoint = 'https://cities-819f6-default-rtdb.europe-west1.firebasedatabase.app/.json';

const getCitiesData = () => {
  return new Promise((resolve, reject) => {
    axios.get(endpoint).then(resolve).catch(reject);
  });
};

const apiServices = {
  getCitiesData,
};

export default apiServices;
