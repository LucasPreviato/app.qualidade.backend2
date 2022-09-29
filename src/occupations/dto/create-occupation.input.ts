import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOccupationInput {
  @Field()
  name: string;
  @Field(() => Int, { nullable: true })
  version?: number;
  @Field(() => Date, { nullable: true })
  revisionAt?: Date;
  @Field()
  alterations: string;
}
