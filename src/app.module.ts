import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { DepartmentsModule } from './departments/departments.module';
import { JobcategoriesModule } from './jobcategories/jobcategories.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/types/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    PrismaModule,
    UnitsModule,
    DepartmentsModule,
    JobcategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
