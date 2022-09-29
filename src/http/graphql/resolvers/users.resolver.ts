import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../../../services/users.service';

import { User } from '../models/user';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  public async createUser() {
    return {} as User;
  }
}
