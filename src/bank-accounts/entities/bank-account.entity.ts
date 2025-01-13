import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('bankaccounts_enzo')
export class BankAccount {
    
      @PrimaryColumn()
      id!: number;
  
      @Column()
      number!: number;
  
      @Column()
      type!: string;
  
      @Column()
      holderName!: string;
  
      @Column()
      holderEmail!: string;
  
      @Column()
      holderDocument!: string;
  
      @Column()
      holderType!: number;
  
      @Column()
      createdAt!: string;
  
      @Column()
      updateAat!: string;
}
