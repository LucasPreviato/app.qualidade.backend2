import { Module } from '@nestjs/common';
import { JobcategoriesService } from './jobcategories.service';
import { JobcategoriesResolver } from './jobcategories.resolver';

@Module({
  providers: [JobcategoriesResolver, JobcategoriesService]
})
export class JobcategoriesModule {}
