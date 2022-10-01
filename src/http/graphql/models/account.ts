import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Account as Model } from '@prisma/client';

enum AccountType {
  SAVINGS = 'SAVINGS',
  CURRENT = 'CURRENT',
}

registerEnumType(AccountType, {
  name: 'PurchaseStatus',
  description: 'Available purchase statuses',
});

@ObjectType('Account')
export class Account implements Partial<Model> {
  @Field(() => ID)
  public id: string;

  @Field(() => AccountType)
  accountType: AccountType;

  @Field()
  public balance: number;

  @Field()
  public userId: string;
}
