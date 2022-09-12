import IRepository from '../../domain/factory/IRepository';
import { ICreateEntityUseCase } from '../../domain/useCase/ICreateEntityUseCase';

export default abstract class CreateEntityUseCase<T>
  implements ICreateEntityUseCase<T>
{
  repository!: IRepository<T>;
  constructor() {}

  async execute(data: T): Promise<T> {
    try {
      const transformedData = await this.repository.create(data);
      return transformedData;
    } catch (error) {
      throw error;
    }
  }
}
