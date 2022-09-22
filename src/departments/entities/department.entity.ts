import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Unit } from 'src/units/entities/unit.entity';

@ObjectType()
@InputType('DepartmentInput')
export class Department implements Prisma.DepartmentUncheckedCreateInput {
  @Field(() => Int)
  id?: number;
  @Field(() => Int)
  unitId: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  phone?: string;
  @Field()
  initials: string;
  @Field(() => Unit)
  unit: Unit;
}
