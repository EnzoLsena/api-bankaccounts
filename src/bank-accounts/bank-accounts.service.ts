import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { Repository } from 'typeorm';
import { BankAccount } from './entities/bank-account.entity';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly repository: Repository<BankAccount>
  ){

  }

  create(dto: CreateBankAccountDto) {

    const bankAccount = this.repository.create(dto)
    return this.repository.save(bankAccount);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
     return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateBankAccountDto) {
    const bankAccount = await this.repository.findOneBy({ id });
    if(!bankAccount) {
      return null;
    }
    this.repository.merge(bankAccount, dto);
    return this.repository.save(bankAccount);
  }

  async remove(id: number) {
    const bankAccount = await this.repository.findOneBy({ id });
    if(!bankAccount) {
      return null;
    }
    return this.repository.remove(bankAccount);
  }
}
