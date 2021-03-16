import { MigrationInterface, QueryRunner } from "typeorm";

export class createPositionTable1608294623185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table position (
            id serial not null ,
            name_position_first varchar(100) not null,
            constraint pk_position primary key(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
    DROP TABLE position
    `)
    }

}
