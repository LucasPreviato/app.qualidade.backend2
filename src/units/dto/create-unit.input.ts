import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUnitInput implements Prisma.UnitCreateInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @Field()
  name: string;
  @Field()
  @IsOptional()
  @IsString()
  email?: string;
  @Field()
  @IsOptional()
  @IsString()
  phone?: string;
}
