import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deposit } from './entities/deposit.entity';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Deposit])],
  controllers: [DepositController],
  providers: [DepositService],
})
export class DepositModule {}
