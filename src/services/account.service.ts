import { Injectable } from '@nestjs/common';
import { AccountType } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

interface AccountDto {
  balance: number;
  userId: string;
  accountType: AccountType;
}

@Injectable()
export class ACcountService {
  constructor(private prisma: PrismaService) {}
  findByUserId(userId: string) {
    return this.prisma.account.findMany({ where: { userId } });
  }
  createAccount(data: AccountDto) {
    return this.prisma.account.create({ data });
  }
}
