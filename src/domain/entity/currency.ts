// @ts-ignore
import { attributes } from 'structure';

interface Currency {
  id: String;
  code: String;
  value: Number;
}

const CurrencyEntity = attributes({
  id: String,
  code: {
    type: String,
    upperCase: true,
    required: true
  },
  value: {
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
})(class CurrencyEntity {});

export { CurrencyEntity };
export default Currency;
