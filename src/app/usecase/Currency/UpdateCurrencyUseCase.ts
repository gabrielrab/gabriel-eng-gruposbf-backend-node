import UpdateEntityUseCase from '../../../core/usecase/UpdateEntityUseCase';
import Currency from '../../../domain/entity/currency';
import CurrencyRepository from '../../../infra/repository/CurrencyRepository';

export default class UpdateCurrencyUseCase extends UpdateEntityUseCase<Currency> {
  constructor() {
    super();
    this.repository = new CurrencyRepository();
  }
}
