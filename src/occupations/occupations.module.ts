import { Module } from '@nestjs/common';
import { OccupationsService } from './occupations.service';
import { OccupationsResolver } from './occupations.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [OccupationsResolver, OccupationsService, PrismaService],
})
export class OccupationsModule {}
