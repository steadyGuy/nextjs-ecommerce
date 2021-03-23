import axios from 'axios';
import { Product } from '../../store/ducks/products/contracts/state';

const { API_URL } = process.env;

export const fetchProducts = async (): Promise<Product[]> => {
  const bla = await axios.get(`${API_URL}/products`);
  const { data } = await axios.get('http://localhost:3001/products');

  return data;
};
