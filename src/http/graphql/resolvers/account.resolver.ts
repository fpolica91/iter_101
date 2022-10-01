import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveReference,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AccountService } from '../../../services/account.service';
import { UsersService } from '../../../services/users.service';
import { CreateAccount } from '../dtos/createAccount.dto';
import { Account } from '../models/account';

@Resolver(() => Account)
export class AccountResolver {
  constructor(
    private accountService: AccountService,
    private userService: UsersService,
  ) {}

  // @ResolveField()
  // async user(@Parent() account: Account) {
  //   return this.userService.me(account.userId);
  // }
  // @Query(() => [Account])
  // public async findAccounts(@Args('userId') userId: string) {
  //   const accounts = await this.accountService.findByUserId(userId);
  //   return accounts;
  // }
  @Mutation(() => Account)
  public async createAccount(@Args('accountData') accountData: CreateAccount) {
    const account = await this.accountService.createAccount(accountData);
    return account;
  }
  // @ResolveReference()
  // resolveReference(reference: { userId: string }) {
  //   return this.userService.me(reference.userId);
  // }
}
