import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
@InputType('DepartmentInput')
export class Department implements Prisma.DepartmentUncheckedCreateInput {
  @Field(() => Int)
  id?: number;
  @Field(() => Int)
  unitId: number;
  @Field()
  name: string;
  @Field()
  email?: string;
  @Field()
  phone?: string;
  @Field()
  initials?: string;
}
