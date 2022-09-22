import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Department } from '../entities/department.entity';

@InputType()
export class CreateDepartmentInput extends Department {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  unitId: number;
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @Field()
  name: string;
  @Field()
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;
  @Field()
  @IsString()
  @IsOptional()
  phone?: string;
  @Field()
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  initials: string;
}
