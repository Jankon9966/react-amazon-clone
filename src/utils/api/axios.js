import axios from 'axios';

const options = {
  url: 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product',
  params: {
    url: 'https://www.amazon.com/dp/B09938DVH2'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
    'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
  }
};

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get(options.url);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
