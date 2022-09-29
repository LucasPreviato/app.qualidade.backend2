import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}
  create({ name, email, phone, unitaddress }: CreateUnitInput) {
    return this.prisma.unit.create({
      data: {
        name,
        email,
        phone,
        unitAddress: {
          create: {
            street: unitaddress.street,
            number: unitaddress.number,
            district: unitaddress.district,
            city: unitaddress.city,
            cep: unitaddress.cep,
            uf: unitaddress.uf,
            complement: unitaddress.complement,
          },
        },
      },
      include: { unitAddress: true },
    });
  }

  findAll() {
    return this.prisma.unit.findMany({ include: { unitAddress: true } });
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
