import { Body, Controller, Post } from "@nestjs/common/decorators";
import { CreateMatchDto } from "./Dto/CreateMatchDto";
import { Match } from "./match.entity";
import { MatchesService } from "./matches.service";

@Controller('matches')
export class MatchesController {

    constructor(private matchesService: MatchesService) {

    }

    @Post() 
    async create(@Body() dto: CreateMatchDto) {
        return new Match(await this.matchesService.create(dto));
    }

}