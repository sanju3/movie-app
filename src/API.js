import axios from 'axios';

export const getData = async () => {
  const {data} = await axios.get(
    'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=F493stB50gvFVeedyFlTKBA9UzA7odGY',
  );
  const {results} = data;
  return results;
};
