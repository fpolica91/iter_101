import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface UserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  ssn: string;
  phoneNumber: string;
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: UserDto) {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }
}
