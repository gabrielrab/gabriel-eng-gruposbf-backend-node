export default interface IController<T> {
  create(data: T): Promise<T>;
  getById(id: string): Promise<T>;
  list(params?: object): Promise<T[]>;
  update(id: string, data: object): Promise<T>;
  delete(id: string): Promise<Boolean>;
}
