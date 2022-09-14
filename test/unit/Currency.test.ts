import Currency, { CurrencyEntity } from '../../src/domain/entity/currency';

describe('Unit: Currency', () => {
  test('Should be create a valid currency', () => {
    const mock: Currency = {
      id: '123',
      code: 'USDT',
      value: 5.2
    };
    const currency = new CurrencyEntity(mock);

    expect(currency.validate().valid).toBe(true);

    expect(currency.id).toBe(mock.id);
    expect(currency.code).toBe(mock.code);
    expect(currency.value).toBe(mock.value);
  });

  test('Should be validate a invalid currency', () => {
    const mock = {
      id: '123',
      code: 'USDT'
    };
    const currency = new CurrencyEntity(mock);

    const { valid, errors } = currency.validate();

    expect(valid).toBe(false);
    expect(errors.length > 0).toBe(true);

    expect(currency.id).toBe(mock.id);
    expect(currency.code).toBe(mock.code);
  });
});
