import { Controller, Get } from '@nestjs/common';

import { AppService, IProduct } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts(): IProduct[] {
    return this.appService.getProducts();
  }
}
