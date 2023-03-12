import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamModule } from "../team/team.module";
import { Match } from "./match.entity";
import { MatchesController } from "./matches.controller";
import { MatchesService } from "./matches.service";


@Module({
  imports: [TypeOrmModule.forFeature([Match]), forwardRef(() => TeamModule)],
  exports: [TypeOrmModule],
  providers: [MatchesService],
  controllers: [MatchesController]
})
export class MatchModule {}
