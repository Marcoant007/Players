import { Team } from "../teams/team.model";
export class Player {
    id?: number;
    name: string;
    nationality: string;
    age: number;
    team_id: number;
    pass: number;
    avatar?: string;
    defense: number;
    speed: number;
    dri: number;
    shoting: number;
    skill?: number
    team?: Team;


    constructor() {
        //this.playerPositions = [];

    }

}