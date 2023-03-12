import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateTeamDto } from './Dto/CreateTeamDto';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {

    constructor(@InjectRepository(Team) private teamRepo: Repository<Team>) { }

    findAll(): Promise<Team[]> {
        return this.teamRepo.find({
            relations: {
                matchesA: true,
                matchesB: true
            }, 
        });

    }

    find(id: number) {
        return this.teamRepo.findOne({
            where: {
                id: id
            },
            relations: {
                matchesA: true,
                matchesB: true
            }
        });
    }

    create(teamDto: CreateTeamDto): Promise<Team> {
        return this.teamRepo.save(teamDto)
    }

    softDelete() {
        
    }

}
