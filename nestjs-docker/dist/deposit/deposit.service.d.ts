import { Repository } from 'typeorm';
import { Deposit } from './entities/deposit.entity';
import { DepositDto } from './dto/deposit.dto';
export declare class DepositService {
    private readonly depositRepository;
    constructor(depositRepository: Repository<Deposit>);
    syncDeposit(deposit: DepositDto): Promise<void>;
}
