import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJobcategoryInput } from './dto/create-jobcategory.input';
import { UpdateJobcategoryInput } from './dto/update-jobcategory.input';

@Injectable()
export class JobcategoriesService {
  constructor(private prisma: PrismaService) {}
  create(createJobcategoryInput: CreateJobcategoryInput) {
    return this.prisma.jobCategory.create({
      data: { ...createJobcategoryInput },
    });
  }

  findAll() {
    return this.prisma.jobCategory.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} jobcategory`;
  }

  update(id: number, updateJobcategoryInput: UpdateJobcategoryInput) {
    return `This action updates a #${id} jobcategory`;
  }

  remove(id: number) {
    return this.prisma.jobCategory.delete({ where: { id } });
  }
}
