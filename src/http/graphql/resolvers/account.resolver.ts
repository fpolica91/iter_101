import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ACcountService } from '../../../services/account.service';
import { CreateAccount } from '../dtos/createAccount.dto';
import { Account } from '../models/account';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private accountService: ACcountService) {}

  @Mutation(() => Account)
  public async createAccount(@Args('accountData') accountData: CreateAccount) {
    const account = await this.accountService.createAccount(accountData);
    return account as Account;
  }
}
