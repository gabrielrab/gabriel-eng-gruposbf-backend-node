export interface ICreateEntityUseCase<T> {
  execute(data: T): Promise<T>;
}
