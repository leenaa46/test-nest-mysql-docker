import { DepositService } from '../deposit/deposit.service';
import { DepositDto } from '../deposit/dto/deposit.dto';
import { Deposit } from '../deposit/entities/deposit.entity';
export declare class DepositController {
    private readonly depositService;
    constructor(depositService: DepositService);
    syncDeposit(deposit: DepositDto): Promise<{
        mssg: string;
    }>;
    getDeposits(): Promise<Deposit[]>;
}
