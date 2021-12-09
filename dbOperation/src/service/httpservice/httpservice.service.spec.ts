import { Test, TestingModule } from '@nestjs/testing';
import { HttpserviceService } from './httpservice.service';

describe('HttpserviceService', () => {
  let service: HttpserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpserviceService],
    }).compile();

    service = module.get<HttpserviceService>(HttpserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
