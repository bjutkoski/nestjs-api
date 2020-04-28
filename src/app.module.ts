import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consume: MiddlewareConsumer) {
    // consume.apply(LoggerMiddleware).forRoutes(ProductsController);
    // consume
    // .apply(LoggerMiddleware)
    // .forRoutes({ path: 'products', method: RequestMethod.GET });
    consume
      .apply(LoggerMiddleware)
      .exclude({ path: 'products', method: RequestMethod.GET })
      .forRoutes(ProductsController);
  }
}
