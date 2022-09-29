import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
@InputType('OccupationInput')
export class Occupation implements Prisma.OccupationUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field()
  name: string;
  @Field(() => Int, { nullable: true })
  version?: number;
  @Field(() => Date, { nullable: true })
  revisionAt?: Date;
  @Field()
  alterations: string;
}
