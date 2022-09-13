import CreateEntityUseCase from '../../../core/usecase/CreateEntityUseCase';
import Product from '../../../domain/entity/product';
import ProductRepository from '../../../infra/repository/ProductRepository';

export default class CreateProductUseCase extends CreateEntityUseCase<Product> {
  constructor() {
    super();
    this.repository = new ProductRepository();
  }
}
