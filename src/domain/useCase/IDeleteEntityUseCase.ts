export interface IDeleteEntityUseCase<T> {
  execute(id: String): Promise<Boolean>;
}
