import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

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
}
