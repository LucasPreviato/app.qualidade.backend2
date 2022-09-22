import { InputType, Int, Field } from '@nestjs/graphql';
import { Department } from '../entities/department.entity';

@InputType()
export class CreateDepartmentInput {
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
