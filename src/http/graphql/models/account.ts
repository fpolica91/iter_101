import {
  Directive,
  Field,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Account as Model } from '@prisma/client';
import { User } from './user';

enum AccountType {
  SAVINGS = 'SAVINGS',
  CURRENT = 'CURRENT',
}

registerEnumType(AccountType, {
  name: 'PurchaseStatus',
  description: 'Available purchase statuses',
});

// @Directive('@key(fields: "userId")')
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

  // @Field()
  // user: User;
}
