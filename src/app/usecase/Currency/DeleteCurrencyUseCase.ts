import DeleteEntityUseCase from '../../../core/usecase/DeleteEntityUseCase';
import Currency from '../../../domain/entity/currency';
import CurrencyRepository from '../../../infra/repository/CurrencyRepository';

export default class DeleteCurrencyUseCase extends DeleteEntityUseCase<Currency> {
  constructor() {
    super();
    this.repository = new CurrencyRepository();
  }
}
