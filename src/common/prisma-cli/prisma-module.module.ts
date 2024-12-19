import { Module } from '@nestjs/common';
import { PrismaCliService } from './prisma-cli.service';

@Module({
  providers: [PrismaCliService],
  exports: [PrismaCliService],
})

export class PrismaCliModule {}