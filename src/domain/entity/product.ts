// @ts-ignore
import { attributes } from 'structure';

interface Product {
  id: String;
  name: String;
  price: Number;
}

const ProductEntity = attributes({
  id: String,
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date,
    default: () => new Date()
  }
})(class ProductEntity {});

export { ProductEntity };
export default Product;
