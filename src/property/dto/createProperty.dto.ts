/* eslint-disable prettier/prettier */
import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;
  @IsString()
  @Length(2, 10, { groups: ['create'] })
  description: string;
  @IsInt()
  @IsPositive()
  price: number;
}
