import CreateProductUseCase from '../../app/usecase/Product/CreateProductUseCase';
import DeleteProductUseCase from '../../app/usecase/Product/DeleteProductUseCase';
import GetProductUseCase from '../../app/usecase/Product/GetProductUseCase';
import ListProductUseCase from '../../app/usecase/Product/ListProductUseCase';
import UpdateProductUsecase from '../../app/usecase/Product/UpdateProductUseCase';
import Controller from '../../core/controller/Controller';
import Product from '../../domain/entity/product';

export default class ProductController extends Controller<Product> {
  constructor() {
    super();
    this.createEntityUseCase = new CreateProductUseCase();
    this.getEntityUseCase = new GetProductUseCase();
    this.listEntityUseCase = new ListProductUseCase();
    this.updateEntityUseCase = new UpdateProductUsecase();
    this.deleteEntityUseCase = new DeleteProductUseCase();
  }
}
