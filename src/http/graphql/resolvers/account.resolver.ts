import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ACcountService } from '../../../services/account.service';
import { CreateAccount } from '../dtos/createAccount.dto';
import { Account } from '../models/account';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private accountService: ACcountService) {}

  @Query(() => [Account])
  public async findAccounts(@Args('userId') userId: string) {
    const accounts = await this.accountService.findByUserId(userId);
    return accounts;
  }

  @Mutation(() => Account)
  public async createAccount(@Args('accountData') accountData: CreateAccount) {
    const account = await this.accountService.createAccount(accountData);
    return account as Account;
  }
}
