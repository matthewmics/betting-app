import { Team } from '../features/team/team.entity';
import { DataSourceOptions, DataSource } from 'typeorm'
import migrationList from './migration-list';
import { Match } from '../features/match/match.entity';

export const DatasourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'local',
    database: 'betting_app',
    entities: [Team, Match],
    synchronize: false,
    migrations: [
        ...migrationList
    ],
    migrationsRun: false
} as DataSourceOptions;

export default new DataSource(DatasourceOptions);