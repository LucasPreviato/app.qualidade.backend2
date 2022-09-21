import { InputType, Int, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateUnitInput implements Prisma.UnitCreateInput {
  @Field()
  name: string;
  @Field()
  email?: string;
  @Field()
  phone?: string;
}
