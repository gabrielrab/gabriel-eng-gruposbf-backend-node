import GetEntityUseCase from '../../../core/usecase/GetEntityUseCase';
import Product from '../../../domain/entity/product';
import ProductRepository from '../../../infra/repository/ProductRepository';

export default class GetProductUseCase extends GetEntityUseCase<Product> {
  constructor() {
    super();
    this.repository = new ProductRepository();
  }
}
