import { Field, InputType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@InputType()
export class CreateUser implements Partial<User> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  username: string;

  @Field()
  ssn: string;

  @Field()
  phoneNumber: string;
}
