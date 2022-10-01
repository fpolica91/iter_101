import { Module } from '@nestjs/common';

import path from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersResolver } from './graphql/resolvers/users.resolver';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from '../services/users.service';
import { AccountService } from '../services/account.service';
import { AccountResolver } from './graphql/resolvers/account.resolver';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [UsersService, UsersResolver, AccountService, AccountResolver],
})
export class HttpModule {}
