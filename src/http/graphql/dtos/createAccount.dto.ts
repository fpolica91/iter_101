import { Field, InputType } from '@nestjs/graphql';
import { Account, AccountType } from '@prisma/client';

@InputType()
export class CreateAccount implements Partial<Account> {
  @Field()
  balance: number;
  @Field()
  userId: string;
  @Field()
  accountType: AccountType;
}
