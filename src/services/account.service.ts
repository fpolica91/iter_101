import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface AccountDto {
  balance: number;
  userId: string;
}

@Injectable()
export class ACcountService {
  constructor(private prisma: PrismaService) {}
  createAccount(data: AccountDto) {
    return this.prisma.account.create({ data });
  }
}
