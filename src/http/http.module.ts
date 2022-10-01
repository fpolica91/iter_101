import { Module } from '@nestjs/common';

import path from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { UsersResolver } from './graphql/resolvers/users.resolver';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from '../services/users.service';
import { HttpResolver } from './http.resolver';
import { HttpService } from './http.service';
import { ACcountService } from '../services/account.service';
import { AccountResolver } from './graphql/resolvers/account.resolver';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    UsersService,
    UsersResolver,
    HttpResolver,
    HttpService,
    ACcountService,
    AccountResolver,
  ],
})
export class HttpModule {}
