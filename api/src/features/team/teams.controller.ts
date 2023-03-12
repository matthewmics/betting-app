import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { CreateTeamDto } from './Dto/CreateTeamDto';
import { Team } from './team.entity';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {

    constructor(private teamsService: TeamsService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async getAll() {
        return await this.teamsService.findAll();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    async get(@Param() params: { id: number }) {
        return await this.teamsService.find(params.id);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async create(@Body() createTeamDto: CreateTeamDto) {
        return await this.teamsService.create(createTeamDto);
    }
}
