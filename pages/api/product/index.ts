import { NextApiRequest, NextApiResponse } from 'next';
import Products from '../../../models/ProductModel';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res);
      break;

    default:
      break;
  }
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await Products.find();
    return res.json({
      status: 'success',
      result: products.length,
      products,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
