import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Account } from './account';

@ObjectType('User')
@Directive('@key(fields: "userId")')
export class User {
  @Field(() => ID)
  public id: string;
  @Field()
  public email: string;
  @Field()
  public username: string;
  @Field()
  public firstName: string;
  @Field()
  public lastName: string;
  @Field()
  public ssn: string;
  @Field()
  public phoneNumber: string;

  @Field(() => [Account])
  public accounts: Account[];
}

// model User {
//   id          String    @id @default(cuid())
//   email       String    @unique
//   username    String    @unique
//   firstName   String
//   lastName    String
//   ssn         String    @unique
//   password    String
//   phoneNumber String
//   Account     Account[]
//   updatedAt   DateTime  @default(now()) @updatedAt
//   createdAt   DateTime  @default(now())
// }
// \model Customer {
//   authUserId String?    @unique
//   id         String     @id @default(uuid())
//   createdAt  DateTime   @default(now())
//   updatedAt  DateTime   @default(now()) @updatedAt
//   Purchases  Purchase[]
// }
