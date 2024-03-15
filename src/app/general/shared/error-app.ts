export class ErrorApp extends Error {
  code?: string;
  clientMessage?: string;
  origin?: Error;

  constructor(public codigo?: string) {
    super(codigo);
    this.name = 'ErrorApp';
  }

  static errorServidor(httpError: any): ErrorApp {
    const error = new ErrorApp('ErrorServidor');
    error.codigo = httpError.failure;
    error.clientMessage = httpError.code;
    error.origin = httpError;
    return error;
  }

  static errorCliente(httpError: any): ErrorApp {
    const error = new ErrorApp('ErrorCliente');
    error.codigo = httpError.failure;
    error.clientMessage = httpError.code;
    error.origin = httpError;
    return error;
  }

  static esErrorApp(error: any): boolean {
    return error instanceof ErrorApp;
  }

}
