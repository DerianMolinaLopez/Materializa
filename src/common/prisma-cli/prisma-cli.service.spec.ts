import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCliService } from './prisma-cli.service';

describe('PrismaCliService', () => {
  let service: PrismaCliService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaCliService],
    }).compile();

    service = module.get<PrismaCliService>(PrismaCliService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
