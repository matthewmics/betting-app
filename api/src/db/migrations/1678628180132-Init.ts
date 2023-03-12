import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1678628180132 implements MigrationInterface {
    name = 'Init1678628180132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match" ("id" SERIAL NOT NULL, "teamAId" integer NOT NULL, "teamBId" integer NOT NULL, CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "deletedDate" TIMESTAMP, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "match" ADD CONSTRAINT "FK_ed5f9ae2f22492649e603c01e3c" FOREIGN KEY ("teamAId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "match" ADD CONSTRAINT "FK_954f8d7997e49ee77fb7bd84062" FOREIGN KEY ("teamBId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "match" DROP CONSTRAINT "FK_954f8d7997e49ee77fb7bd84062"`);
        await queryRunner.query(`ALTER TABLE "match" DROP CONSTRAINT "FK_ed5f9ae2f22492649e603c01e3c"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "match"`);
    }

}
