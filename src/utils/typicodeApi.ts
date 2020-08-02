import axios from 'axios';
import Product from 'model/Product';

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
      _limit: 15,
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
