export default interface Repository<T> {
  create(data: T): Promise<T>;
  getById(id: string): Promise<T>;
  list(params?: object): Promise<T[]>;
  update(id: string, data: T): Promise<T>;
  delete(id: string): Promise<Boolean>;
}
