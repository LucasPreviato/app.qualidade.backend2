import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { DepartmentsModule } from './departments/departments.module';
import { JobcategoriesModule } from './jobcategories/jobcategories.module';
import { OccupationsModule } from './occupations/occupations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/types/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UnitsModule,
    DepartmentsModule,
    JobcategoriesModule,
    OccupationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
