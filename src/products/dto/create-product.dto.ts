import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'id deve ser informado' })
  @IsString({ message: 'id deve ser uma string' })
  readonly id: string;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsInt()
  readonly qty: number;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
