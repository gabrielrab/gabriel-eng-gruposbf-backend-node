import ListEntityUseCase from '../../../core/usecase/ListEntityUseCase';
import Currency from '../../../domain/entity/currency';
import CurrencyRepository from '../../../infra/repository/CurrencyRepository';

export default class ListCurrencyUseCase extends ListEntityUseCase<Currency> {
  constructor() {
    super();
    this.repository = new CurrencyRepository();
  }
}
