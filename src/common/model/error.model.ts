export class ErrorModel{
  status?: number;
  message?: string;
  body?: any;

  constructor(
    status?:number,
    massage?:string,
    body?:any
  ){
    this.status = status;
    this.message = massage ?? 'UNKNOWN';
    this.body = body ?? undefined;
  }
}