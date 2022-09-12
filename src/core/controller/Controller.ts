import { ICreateEntityUseCase } from 'domain/useCase/ICreateEntityUseCase';
import { IDeleteEntityUseCase } from 'domain/useCase/IDeleteEntityUseCase';
import { IGetEntityUseCase } from 'domain/useCase/IGetEntityUseCase';
import { IListEntityUseCase } from 'domain/useCase/IListEntityUseCase';
import { IUpdateEntityUseCase } from 'domain/useCase/IUpdateEntityUseCase';
import IController from '../../domain/controller/IController';

export default abstract class Controller<T> implements IController<T> {
  createEntityUseCase!: ICreateEntityUseCase<T>;
  listEntityUseCase!: IListEntityUseCase<T>;
  updateEntityUseCase!: IUpdateEntityUseCase<T>;
  getEntityUseCase!: IGetEntityUseCase<T>;
  deleteEntityUseCase!: IDeleteEntityUseCase<T>;
  constructor() {}

  async create(data: T): Promise<T> {
    try {
      const entity = await this.createEntityUseCase.execute(data);
      return entity;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<T> {
    try {
      const entity = await this.getEntityUseCase.execute(id);
      return entity;
    } catch (error) {
      throw error;
    }
  }

  async list(params?: object): Promise<T[]> {
    try {
      const entities = await this.listEntityUseCase.execute(params);
      return entities;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: object): Promise<T> {
    try {
      const entity = await this.updateEntityUseCase.execute(id, data);
      return entity;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<Boolean> {
    try {
      await this.deleteEntityUseCase.execute(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
