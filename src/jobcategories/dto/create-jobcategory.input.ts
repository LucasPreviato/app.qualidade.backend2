import { InputType, Int, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Jobcategory } from '../entities/jobcategory.entity';

@InputType()
export class CreateJobcategoryInput implements Prisma.JobCategoryCreateInput {
  @Field()
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;
}
