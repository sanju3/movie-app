import axios from 'axios';
import {getDataLocal} from './storage';

export const getData = async () => {
  if (await getDataLocal('state')) {
    return JSON.parse(await getDataLocal('state'));
  } else {
    const {data} = await axios.get(
      'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY',
    );
    const {results} = data;
    return results;
  }
};

export const login = async credentials => {
  const {data} = await axios.post('https://reqres.in/api/login', credentials);
  return data;
};

export const signup = async credentials => {
  const {data} = await axios.post(
    'https://reqres.in/api/register',
    credentials,
  );
  return data;
};
