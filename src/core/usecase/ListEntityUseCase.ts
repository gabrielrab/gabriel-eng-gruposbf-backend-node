import { IListEntityUseCase } from 'domain/useCase/IListEntityUseCase';
import IRepository from '../../domain/factory/IRepository';

export default abstract class ListEntityUseCase<T>
  implements IListEntityUseCase<T>
{
  repository!: IRepository<T>;
  constructor() {}

  async execute(params?: object): Promise<T[]> {
    try {
      const transformedData = await this.repository.list(params);
      return transformedData;
    } catch (error) {
      throw error;
    }
  }
}
