export interface IListEntityUseCase<T> {
  execute(filters?: any): Promise<T[]>;
}
