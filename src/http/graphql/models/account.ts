import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Account as Model } from '@prisma/client';

@ObjectType('Account')
export class Account implements Partial<Model> {
  @Field(() => ID)
  public id: string;
  @Field()
  public balance: number;
  @Field()
  public userId: string;
}
