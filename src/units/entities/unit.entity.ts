import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UnitAddress } from './unitaddress.entity';

@ObjectType()
@InputType('UnitInput')
export class Unit {
  @Field(() => Int)
  id?: number;
  @Field()
  name: string;
  @Field()
  email?: string;
  @Field()
  phone?: string;
  @Field(() => UnitAddress, { nullable: true })
  unitAddress?: UnitAddress;
}
