import ListEntityUseCase from '../../../core/usecase/ListEntityUseCase';
import Product from '../../../domain/entity/product';
import ProductRepository from '../../../infra/repository/ProductRepository';

export default class ListProductUseCase extends ListEntityUseCase<Product> {
  constructor() {
    super();
    this.repository = new ProductRepository();
  }
}
