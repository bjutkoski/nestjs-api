import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductsController } from './products/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    console.log('connection status ', connection.isConnected);
  }
  /*
  configure(consume: MiddlewareConsumer) {
    consume.apply(LoggerMiddleware).forRoutes(ProductsController);
    consume
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.GET });
    consume
      .apply(LoggerMiddleware)
      .exclude({ path: 'products', method: RequestMethod.GET })
      .forRoutes(ProductsController);
  }
  */
}
