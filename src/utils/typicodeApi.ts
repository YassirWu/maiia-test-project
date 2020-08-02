import axios from 'axios';
import Product from 'model/Product';
import { LIMIT_PRODUCT_PER_PAGE } from './constants';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const client = axios.create({
  baseURL: BASE_URL,
});

type GetProductsResponse = {
  products: Product[];
  total: number;
}

export const getProductsApi = async (page = 0, search?: string): Promise<GetProductsResponse> => {
  const response = await client.get<Product[]>('photos', {
    params: {
      _page: page,
      _limit: LIMIT_PRODUCT_PER_PAGE,
      title_like:search
    }
  });
  
  const total: number = response.headers['x-total-count'] as number;
  
  return {
    products: response.data,
    total,
  };
};

export default client;
