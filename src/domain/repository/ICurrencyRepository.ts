export default interface ICurrencyRepository<Currency> {
  create(data: Currency): Promise<Currency>;
  getById(id: string): Promise<Currency>;
  getBy(key: keyof Currency, value: any): Promise<Currency[]>;
  list(params?: object): Promise<Currency[]>;
  update(id: string, data: Currency): Promise<Currency>;
  delete(id: string): Promise<Boolean>;
}
