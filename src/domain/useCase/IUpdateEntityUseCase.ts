export interface IUpdateEntityUseCase<T> {
  execute(id: String, data: T): Promise<T>;
}
