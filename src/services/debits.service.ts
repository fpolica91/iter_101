import { Injectable } from '@nestjs/common';
import { AccountType } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

interface DebitDto {
  amount: number;
  userId: string;
  accountType: AccountType;
}

@Injectable()
export class DebitService {
  constructor(private prisma: PrismaService) {}
  findByUserId(userId: string) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }
  // createDebit(data: AccountDto) {}
}
