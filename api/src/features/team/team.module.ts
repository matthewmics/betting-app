import { forwardRef, Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { MatchModule } from '../match/match.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), forwardRef(() => MatchModule)],
  providers: [TeamsService],
  controllers: [TeamsController],
  exports: [TypeOrmModule]
})
export class TeamModule {}
