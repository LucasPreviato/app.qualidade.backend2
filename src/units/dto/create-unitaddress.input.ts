import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUnitAddressInput {
  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  district?: string;

  @Field({ nullable: true })
  number?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  cep?: string;

  @Field({ nullable: true })
  uf?: string;
  @Field({ nullable: true })
  complement?: string;
}
