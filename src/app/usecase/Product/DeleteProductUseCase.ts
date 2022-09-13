import DeleteEntityUseCase from '../../../core/usecase/DeleteEntityUseCase';
import Product from '../../../domain/entity/product';
import ProductRepository from '../../../infra/repository/ProductRepository';

export default class DeleteProductUseCase extends DeleteEntityUseCase<Product> {
  constructor() {
    super();
    this.repository = new ProductRepository();
  }
}
