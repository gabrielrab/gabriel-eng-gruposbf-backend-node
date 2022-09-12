export interface IUpdateEntityUseCase<T> {
  execute(id: String, data: object): Promise<T>;
}
