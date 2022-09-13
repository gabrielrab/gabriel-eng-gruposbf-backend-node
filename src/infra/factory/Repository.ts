import KnexConnectionAdapter from '../database/KnexConnectionAdapter';
import IRepository from '../../domain/factory/IRepository';
import { NotFoundException, ValidationException } from '../../core/exceptions';
import { Knex } from 'knex';

export default abstract class Repository<T> implements IRepository<T> {
  public readonly connection: Knex;
  entity!: any;
  tableName!: string;

  constructor() {
    this.connection = KnexConnectionAdapter;
  }
  async create(data: T): Promise<T> {
    try {
      const { valid, errors } = new this.entity(data).validate();
      if (!valid) {
        throw new ValidationException(
          `Validation error on '${this.tableName}' record`,
          errors
        );
      }

      const record = await this.connection(this.tableName)
        .insert(new this.entity(data).toJSON())
        .returning('*');

      return record[0];
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string): Promise<T> {
    try {
      const entity = await this.connection
        .select()
        .from(this.tableName)
        .where({ id })
        .first();

      if (!entity) {
        throw new NotFoundException();
      }

      return entity;
    } catch (error) {
      throw error;
    }
  }
  async list(params?: object): Promise<T[]> {
    try {
      const list = await this.connection(this.tableName)
        .select()
        .from(this.tableName)
        .where(params || {});
      return list;
    } catch (error) {
      throw error;
    }
  }
  async update(id: string, data: T): Promise<T> {
    try {
      const record = await this.connection(this.tableName)
        .where({ id })
        .first();
      const transformedEntity = new this.entity({ ...record, ...data });
      const { valid, errors } = transformedEntity.validate();
      if (!valid) {
        throw new ValidationException(
          `Validation error on '${this.tableName}' record`,
          errors
        );
      }

      new Promise(async (resolve, reject) => {
        await this.connection.transaction(async (transaction) => {
          try {
            return resolve(
              await transaction(this.tableName)
                .where({ id })
                .update({
                  ...transformedEntity.toJSON(),
                  updated_at: new Date()
                })
                .returning('*')
            );
          } catch (error) {
            await transaction.rollback();
            reject(error);
          } finally {
            if (transaction.isCompleted()) {
              await transaction.commit();
            }
          }
        });
      });

      return transformedEntity.toJSON();
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<Boolean> {
    try {
      await this.getById(id);
      await this.connection(this.tableName).where({ id }).first().del();
      return true;
    } catch (error) {
      throw error;
    }
  }
}
