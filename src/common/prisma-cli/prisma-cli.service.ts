import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaCliService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
      }
}
