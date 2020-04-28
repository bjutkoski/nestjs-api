import { Controller, Get, Req, Res, Query } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(
    @Req()
    request: Request,
    @Res()
    response: Response,
    @Query()
    query,
  ): Response {
    console.log(query);
    return response.json({ msg: 'find all' });
  }
}
