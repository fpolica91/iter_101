import {
  Args,
  Mutation,
  Resolver,
  Query,
  Parent,
  ResolveField,
  ResolveReference,
} from '@nestjs/graphql';

import { AccountService } from '../../../services/account.service';
import { UsersService } from '../../../services/users.service';
import { CreateUser } from '../dtos/createUser.dto';
import { User } from '../models/user';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private accountService: AccountService,
  ) {}

  @Query(() => User)
  public async me(@Args('id') id: string) {
    const user = await this.usersService.me(id);
    return user;
  }

  // name must be the same as whats in model
  @ResolveField()
  async accounts(@Parent() user: User) {
    const accounts = this.accountService.findAccountsByUserId(user.id);
    return accounts;
  }

  // resolves the reference of what the user is called in the foreign table
  @ResolveReference()
  resolveReference(reference: { userId: string }) {
    return this.accountService.findAccountsByUserId(reference.userId);
  }

  @Mutation(() => User)
  public async createUser(@Args('userData') userData: CreateUser) {
    const user = await this.usersService.createUser(userData);
    return user;
  }
}
