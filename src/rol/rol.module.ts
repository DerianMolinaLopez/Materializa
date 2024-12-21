import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
@Module({
  imports:[PrismaCliModule],
  controllers: [RolController],
  providers: [RolService],
})
export class RolModule {}
