import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createPlayersTable1607633306845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
    create table team (
        id serial,
        name varchar(100),
        awards varchar(100),
        constraint pk_team primary key(id)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
    DROP TABLE team
    `);
    }
}



