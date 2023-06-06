import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { DepositService } from '../deposit/deposit.service';
import { DepositDto } from '../deposit/dto/deposit.dto';
@Controller()
export class DepositController {
  constructor(private readonly depositService: DepositService) {}
  @Post('/deposit')
  async syncDeposit(@Body() deposit: DepositDto) {
    try {
      await this.depositService.syncDeposit(deposit);
      return { mssg: 'sync :D' };
    } catch (error) {
      throw new BadRequestException('somenthin went wrong');
    }
  }
}
