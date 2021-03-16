import { MigrationInterface, QueryRunner } from "typeorm";

export class createTeamTable1607956532358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table players (
            id serial not null,
            name varchar(100) not null,
            avatar varchar(255) default null,
            age int not null,
            nationality varchar(100) not null,
            team_id int,
            speed int default null,
            dri int default null,
            shoting int default null,
            pass int default null,
            defense int default null,
            skill int default null,
            constraint pk_player primary key (id),
            constraint fk_player_team foreign key (team_id) references team(id) match simple on update no action on delete no action
            )`
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE players
        `);
    }
}
