import Currency, { CurrencyEntity } from '../../domain/entity/currency';
import ICurrencyRepository from '../../domain/repository/ICurrencyRepository';
import Repository from '../../infra/factory/Repository';

export default class CurrencyRepository
  extends Repository<Currency>
  implements ICurrencyRepository<Currency>
{
  tableName: string;
  entity: any;
  constructor() {
    super();
    this.entity = CurrencyEntity;
    this.tableName = 'currencies';
  }
}
