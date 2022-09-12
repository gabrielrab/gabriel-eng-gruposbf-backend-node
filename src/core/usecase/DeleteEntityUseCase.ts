import { IDeleteEntityUseCase } from 'domain/useCase/IDeleteEntityUseCase';
import IRepository from '../../domain/factory/IRepository';

export default abstract class DeleteEntityUseCase<T>
  implements IDeleteEntityUseCase<T>
{
  repository!: IRepository<T>;
  constructor() {}

  async execute(id: string): Promise<Boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
