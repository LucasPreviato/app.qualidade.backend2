import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentInput } from './dto/create-department.input';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}
  create({ name, email, initials, phone, unitId }: CreateDepartmentInput) {
    return this.prisma.department.create({
      data: {
        name,
        email,
        initials,
        phone,
        unit: { connect: { id: unitId } },
      },
    });
  }

  findAll() {
    return this.prisma.department.findMany({

      include: {
        unit: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.department.findUnique({
      where: { id },
      include: { unit: true },
    });
  }

  // update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
  //   return `This action updates a #${id} department`;
  // }

  remove(id: number) {
    return this.prisma.department.delete({ where: { id } });
  }
}
