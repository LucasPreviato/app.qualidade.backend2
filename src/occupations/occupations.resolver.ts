import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OccupationsService } from './occupations.service';
import { Occupation } from './entities/occupation.entity';
import { CreateOccupationInput } from './dto/create-occupation.input';
import { UpdateOccupationInput } from './dto/update-occupation.input';

@Resolver(() => Occupation)
export class OccupationsResolver {
  constructor(private readonly occupationsService: OccupationsService) {}

  @Mutation(() => Occupation)
  createOccupation(@Args('createOccupationInput') createOccupationInput: CreateOccupationInput) {
    return this.occupationsService.create(createOccupationInput);
  }

  @Query(() => [Occupation], { name: 'occupations' })
  findAll() {
    return this.occupationsService.findAll();
  }

  @Query(() => Occupation, { name: 'occupation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.occupationsService.findOne(id);
  }

  @Mutation(() => Occupation)
  updateOccupation(@Args('updateOccupationInput') updateOccupationInput: UpdateOccupationInput) {
    return this.occupationsService.update(updateOccupationInput.id, updateOccupationInput);
  }

  @Mutation(() => Occupation)
  removeOccupation(@Args('id', { type: () => Int }) id: number) {
    return this.occupationsService.remove(id);
  }
}
