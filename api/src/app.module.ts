import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasourceOptions } from './db/database.config';
import { MatchModule } from './features/match/match.module';
import { TeamModule } from './features/team/team.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatasourceOptions),
    ConfigModule.forRoot(),
    TeamModule,
    MatchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
