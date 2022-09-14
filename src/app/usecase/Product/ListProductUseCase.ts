import CurrencyRepository from '../../../infra/repository/CurrencyRepository';
import ListEntityUseCase from '../../../core/usecase/ListEntityUseCase';
import Product from '../../../domain/entity/product';
import ProductRepository from '../../../infra/repository/ProductRepository';
import { NotFoundException } from '../../../core/exceptions';

export default class ListProductUseCase extends ListEntityUseCase<Product> {
  currencyRepository: CurrencyRepository;
  constructor() {
    super();
    this.repository = new ProductRepository();
    this.currencyRepository = new CurrencyRepository();
  }

  async execute(params?: { currency: string } | undefined): Promise<Product[]> {
    const products = await this.repository.list();

    if (params?.currency) {
      const currencies = await this.currencyRepository.getBy(
        'code',
        params.currency.toUpperCase()
      );

      if (currencies && currencies.length > 0) {
        return products.map((product) => ({
          ...product,
          price: Number(product.price) * Number(currencies[0].value || 1)
        }));
      }
      throw new NotFoundException(`Currency '${params.currency}' not found`);
    }

    return products;
  }
}
