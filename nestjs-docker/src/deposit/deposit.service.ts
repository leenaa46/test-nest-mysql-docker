import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './entities/deposit.entity';
import { DepositDto } from './dto/deposit.dto';

@Injectable()
export class DepositService {
  constructor(
    @InjectRepository(Deposit)
    private readonly depositRepository: Repository<Deposit>,
  ) {}

  async syncDeposit(deposit: DepositDto): Promise<void> {
    await this.depositRepository.save({
      ...deposit,
      depositDate: new Date().toISOString(),
    });
  }

  async getDeposits(): Promise<Deposit[]> {
    return this.depositRepository.find();
  }
}
