import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from '../../../services/users.service';
import { CreateUser } from '../dtos/createUser.dto';

import { User } from '../models/user';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  public async createUser(@Args('userData') userData: CreateUser) {
    const user = await this.usersService.createUser(userData);
    return user as User;
  }
}
