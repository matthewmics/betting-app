import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Match } from "../match/match.entity";
import { Exclude, Expose } from 'class-transformer'

@Entity()
export class Team {
    
    constructor(partial: Partial<Team>) {
        Object.assign(this, partial);
    }

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Match, (match) => match.teamA, {
        onDelete: 'CASCADE'
    })
    matchesA: Promise<Match[]>
    
    
    @OneToMany((type) => Match, (match) => match.teamB, {
        onDelete: 'CASCADE'
    })
    matchesB: Promise<Match[]>

    @Exclude()
    @DeleteDateColumn()
    deletedDate: Date;    

    @Expose()
    get testProp(): string {
        return "this is a test";
    }

}