export interface IGetEntityUseCase<T> {
  execute(id: String): Promise<T>;
}
