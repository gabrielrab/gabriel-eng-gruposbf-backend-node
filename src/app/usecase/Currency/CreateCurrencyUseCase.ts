import Currency from '../../../domain/entity/currency';
import CreateEntityUseCase from '../../../core/usecase/CreateEntityUseCase';
import CurrencyRepository from '../../../infra/repository/CurrencyRepository';

export default class CreateCurrencyUseCase extends CreateEntityUseCase<Currency> {
  constructor() {
    super();
    this.repository = new CurrencyRepository();
  }
}
