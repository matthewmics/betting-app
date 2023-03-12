import { Expose } from "class-transformer";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team.entity";

@Entity()
export class Match {

    constructor(partial?: Partial<Match>) {
        if (partial)
            Object.assign(this, partial)
    }

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne((type) => Team, (team) => team.matchesA, { nullable: false })
    teamA: Team;

    @ManyToOne((type) => Team, (team) => team.matchesB, { nullable: false })
    teamB: Team;

    @Expose()
    get testProp2() {
        return " thiis ano ther tes t"
    }
}