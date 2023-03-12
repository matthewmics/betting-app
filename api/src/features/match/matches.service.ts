import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Match } from "./match.entity";
import { CreateMatchDto } from './Dto/CreateMatchDto'
import { Team } from "../team/team.entity";

@Injectable()
export class MatchesService {

    constructor(@InjectRepository(Match) private matchRepo: Repository<Match>,
        @InjectRepository(Team) private teamRepo: Repository<Team>) {

    }

    async create(dto: CreateMatchDto): Promise<Match> {
        
        const teamA = await this.teamRepo.findOneByOrFail({
            id: dto.teamAId
        })

        const teamB = await this.teamRepo.findOneByOrFail({
            id: dto.teamBId
        })

        const match = new Match({
            teamA: teamA,
            teamB: teamB
        });

        return this.matchRepo.save(match);
    }

}