import { MigrationInterface, QueryRunner } from "typeorm";

export class createPlayerhasPosition1608406396864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table player_has_position (
                id serial not null,
                player_id int,
                position_id int,
                constraint fk_player_has_position_player  foreign key (player_id) references players(id) match simple on update no action on delete cascade,
                constraint fk_player_has_position_position foreign key (position_id) references "position"(id) match simple on update no action on delete no action
        ) 
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE player_has_position
        `)
    }

}
