import { Injectable } from '@nestjs/common';

export interface IProduct {
  title: string;
  quantity: number;
}

@Injectable()
export class AppService {
  getProducts(): IProduct[] {
    return [
      { title: 'Product 1', quantity: 10 },
      { title: 'Product 2', quantity: 20 },
      { title: 'Product 3', quantity: 30 },
    ];
  }
}
