import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('UnitAddressInput')
export class UnitAddress {
  @Field(() => Int, { nullable: true })
  id?: number;
  @Field(() => Int, { nullable: true })
  unitid?: number;
  @Field({ nullable: true })
  street?: string;
  @Field({ nullable: true })
  number?: string;
  @Field({ nullable: true })
  complement?: string;
  @Field({ nullable: true })
  district?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  cep?: string;
  @Field({ nullable: true })
  uf?: string;
}
