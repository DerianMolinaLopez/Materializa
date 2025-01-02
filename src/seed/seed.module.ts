import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[PrismaCliModule]
})
export class SeedModule {}
