import { IUpdateEntityUseCase } from 'domain/useCase/IUpdateEntityUseCase';
import IRepository from '../../domain/factory/IRepository';

export default abstract class UpdateEntityUseCase<T>
  implements IUpdateEntityUseCase<T>
{
  repository!: IRepository<T>;
  constructor() {}

  async execute(id: string, data: T): Promise<T> {
    try {
      const transformedData = await this.repository.update(id, data);
      return transformedData;
    } catch (error) {
      throw error;
    }
  }
}
