import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('ab*cd')
  pattern(): string {
    return 'pattern';
  }

  @Get()
  findAll(): string {
    return 'find all';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    return params;
  }

  @Post()
  @HttpCode(204)
  @Header('Authorization', 'Bearer ABCDEFGH')
  create(): string {
    return 'new product';
  }

  @Put()
  update(): string {
    return 'update product';
  }

  @Delete()
  delete(): string {
    return 'delete product';
  }
}
