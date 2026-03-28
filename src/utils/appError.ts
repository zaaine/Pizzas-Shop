
export class AppError extends Error {
  public status : number;
  public isOperationnal : boolean

  constructor(message : string, status:number) {
    super(message)
    this.status = status;
    this.isOperationnal = true
  // Capture la stack trace ( exclut le constructeur de la trace)
  Error.captureStackTrace(this, this.constructor)
  }
  
}