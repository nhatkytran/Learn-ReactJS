import axios from 'axios';

const searchImages = async searchTerm => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_SECRET_KEY}`,
    },
    params: { query: searchTerm },
  });

  return response.data.results;
};

export default searchImages;
