export class Product {
  constructor(
    public id:number,
    public img : string,
    public name: string,
    public code: string,
    public available:Date,
    public price: number,
    public rate: number
  ) {}
}
