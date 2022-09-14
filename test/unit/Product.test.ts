import Product, { ProductEntity } from '../../src/domain/entity/product';

describe('Unit: Product', () => {
  test('Should be create a valid product', () => {
    const mock: Product = {
      id: '123',
      name: 'Tênis Nike - Masculino',
      price: 199.99
    };
    const product = new ProductEntity(mock);

    expect(product.validate().valid).toBe(true);

    expect(product.id).toBe(mock.id);
    expect(product.name).toBe(mock.name);
    expect(product.price).toBe(mock.price);
  });

  test('Should be validate a invalid product', () => {
    const mock = {
      id: '123',
      name: 'Tênis Nike - Masculino'
    };
    const product = new ProductEntity(mock);

    const { valid, errors } = product.validate();

    expect(valid).toBe(false);
    expect(errors.length > 0).toBe(true);

    expect(product.id).toBe(mock.id);
    expect(product.name).toBe(mock.name);
  });
});
