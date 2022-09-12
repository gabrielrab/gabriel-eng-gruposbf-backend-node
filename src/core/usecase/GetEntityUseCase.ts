import { IGetEntityUseCase } from 'domain/useCase/IGetEntityUseCase';
import IRepository from '../../domain/factory/IRepository';

export default abstract class GetEntityUseCase<T>
  implements IGetEntityUseCase<T>
{
  repository!: IRepository<T>;
  constructor() {}

  async execute(id: string): Promise<T> {
    try {
      const transformedData = await this.repository.getById(id);
      return transformedData;
    } catch (error) {
      throw error;
    }
  }
}
