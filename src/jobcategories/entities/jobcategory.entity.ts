import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
@InputType('JobCategoryInput')
export class Jobcategory implements Prisma.JobCategoryUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field()
  name: string;
}
