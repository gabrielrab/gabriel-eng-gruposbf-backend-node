import Product, { ProductEntity } from '../../domain/entity/product';
import IProductRepository from '../../domain/repository/IProductRepository';
import Repository from '../../infra/factory/Repository';

export default class ProductRepository
  extends Repository<Product>
  implements IProductRepository<Product>
{
  tableName: string;
  entity: any;
  constructor() {
    super();
    this.entity = ProductEntity;
    this.tableName = 'products';
  }
}
