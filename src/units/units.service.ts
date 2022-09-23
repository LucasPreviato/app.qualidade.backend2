import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}
  create(createUnitInput: CreateUnitInput) {
    return this.prisma.unit.create({
      data: {
        ...createUnitInput,
        UnitAddress: {
          create: {
            street: createUnitInput.unitaddress.street,
            number: createUnitInput.unitaddress.number,
            complement: createUnitInput.unitaddress.complement,
            district: createUnitInput.unitaddress.district,
            city: createUnitInput.unitaddress.city,
            cep: createUnitInput.unitaddress.cep,
            uf: createUnitInput.unitaddress.uf,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.unit.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  update(id: number, updateUnitInput: UpdateUnitInput) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return this.prisma.unit.delete({ where: { id } });
  }
}
