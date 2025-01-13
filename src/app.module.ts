import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '**',
      port: 1433,
      username: 'delteaching',
      password: '**',
      database: '**',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true, // Não use em produção
      options: {
        encrypt: true,               // Mantém a conexão criptografada
        trustServerCertificate: true // Ignora validação de certificado
      },
    }),
  ],
})
export class AppModule {}

