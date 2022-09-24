import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UnitAddress } from './unitaddress.entity';

@ObjectType()
@InputType('UnitInput')
export class Unit implements Prisma.UnitUncheckedCreateInput {
  @Field(() => Int)
  id?: number;
  @Field()
  name: string;
  @Field()
  email?: string;
  @Field()
  phone?: string;
  @Field(() => UnitAddress, { nullable: true })
  unitaddress?: UnitAddress;
}
