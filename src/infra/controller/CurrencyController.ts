import CreateCurrencyUseCase from '../../app/usecase/Currency/CreateCurrencyUseCase';
import DeleteCurrencyUseCase from '../../app/usecase/Currency/DeleteCurrencyUseCase';
import GetCurrencyUseCase from '../../app/usecase/Currency/GetCurrencyUseCase';
import ListCurrencyUseCase from '../../app/usecase/Currency/ListCurrencyUseCase';
import UpdateCurrencyUsecase from '../../app/usecase/Currency/UpdateCurrencyUseCase';
import Controller from '../../core/controller/Controller';
import Currency from '../../domain/entity/currency';

export default class CurrencyController extends Controller<Currency> {
  constructor() {
    super();
    this.createEntityUseCase = new CreateCurrencyUseCase();
    this.getEntityUseCase = new GetCurrencyUseCase();
    this.listEntityUseCase = new ListCurrencyUseCase();
    this.updateEntityUseCase = new UpdateCurrencyUsecase();
    this.deleteEntityUseCase = new DeleteCurrencyUseCase();
  }
}
