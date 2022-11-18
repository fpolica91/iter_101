import { Injectable, Get } from '@nestjs/common';
import { AccountType } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

interface AccountDto {
  balance: number;
  userId: string;
  accountType: AccountType;
}

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  findAccountsByUserId(userId: string) {
    return this.prisma.account.findMany({ where: { userId } });
  }

  createAccount(data: AccountDto) {
    return this.prisma.account.create({ data });
  }
}
