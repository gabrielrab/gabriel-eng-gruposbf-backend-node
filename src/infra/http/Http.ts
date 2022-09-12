export default interface Http {
  route(method: string, url: string, callback: any): Promise<void>;
  listen(port: number): Promise<any>;
  close(callback?: any): void;
}
