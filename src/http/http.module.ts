import { Module } from '@nestjs/common';
import { HttpResolver } from './http.resolver';
import path from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { UsersResolver } from './graphql/resolvers/users.resolver';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from '../services/users.service';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [UsersService, UsersResolver],
})
export class HttpModule {}
