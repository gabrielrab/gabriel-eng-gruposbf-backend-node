import { IUpdateEntityUseCase } from 'domain/useCase/IUpdateEntityUseCase';
import IRepository from '../../domain/factory/IRepository';

export default abstract class UpdateEntityUseCase<T>
  implements IUpdateEntityUseCase<T>
{
  repository!: IRepository<T>;
  constructor() {}

  async execute(id: string, data: object): Promise<T> {
    try {
      const transformedData = await this.repository.update(id, data as T);
      return transformedData;
    } catch (error) {
      throw error;
    }
  }
}
