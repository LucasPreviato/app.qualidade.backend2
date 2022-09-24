import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateOccupationInput implements Prisma.OccupationCreateInput {
  @Field()
  name: string;
  @Field()
  version?: number;
  @Field(() => Date)
  daterevision: string | Date;
  @Field()
  alterations: string;
}
