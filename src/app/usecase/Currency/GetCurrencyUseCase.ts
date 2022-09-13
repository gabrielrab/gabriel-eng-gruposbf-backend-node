import GetEntityUseCase from '../../../core/usecase/GetEntityUseCase';
import Currency from '../../../domain/entity/currency';
import CurrencyRepository from '../../../infra/repository/CurrencyRepository';

export default class GetCurrencyUseCase extends GetEntityUseCase<Currency> {
  constructor() {
    super();
    this.repository = new CurrencyRepository();
  }
}
