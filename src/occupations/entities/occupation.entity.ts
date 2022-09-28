import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
@InputType('OccupationInput')
export class Occupation implements Prisma.OccupationUncheckedCreateInput {
  @Field(() => Int)
  id?: number;
  @Field()
  name: string;
  @Field()
  version?: number;
  @Field(() => Date)
  daterevision: string | Date;
  @Field()
  alterations: string;
}
