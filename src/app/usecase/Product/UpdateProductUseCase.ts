import UpdateEntityUseCase from '../../../core/usecase/UpdateEntityUseCase';
import Product from '../../../domain/entity/product';
import ProductRepository from '../../../infra/repository/ProductRepository';

export default class UpdateProductUsecase extends UpdateEntityUseCase<Product> {
  constructor() {
    super();
    this.repository = new ProductRepository();
  }
}
