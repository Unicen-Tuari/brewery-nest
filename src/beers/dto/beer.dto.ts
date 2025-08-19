export class BeerDto {
  id: number;
  name: string;
  description: string;
  style: string;
  stock: number;

  constructor(
    id: number,
    name: string,
    description: string,
    style: string,
    stock: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.style = style;
    this.stock = stock;
  }
}
