import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UnitAddress } from '../entities/unitaddress.entity';

@InputType()
export class CreateUnitInput {
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
  @Field(() => UnitAddress, { nullable: true })
  unitaddress: UnitAddress;
}
