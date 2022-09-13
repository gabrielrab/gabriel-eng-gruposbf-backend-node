export default interface IProductRepository<Product> {
  create(data: Product): Promise<Product>;
  getById(id: string): Promise<Product>;
  list(params?: object): Promise<Product[]>;
  update(id: string, data: Product): Promise<Product>;
  delete(id: string): Promise<Boolean>;
}
