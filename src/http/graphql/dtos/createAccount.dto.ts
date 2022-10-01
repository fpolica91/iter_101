import { Field, InputType } from '@nestjs/graphql';
import { Account } from '@prisma/client';

@InputType()
export class CreateAccount implements Partial<Account> {
  @Field()
  balance: number;
  @Field()
  userId: string;
}
