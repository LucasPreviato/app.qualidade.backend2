import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UnitAddress } from '../entities/unitaddress.entity';
import { CreateUnitAddressInput } from './create-unitaddress.input';

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
  @Field(() => CreateUnitAddressInput, { nullable: true })
  unitaddress: CreateUnitAddressInput;
}
