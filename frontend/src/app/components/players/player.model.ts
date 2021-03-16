import { Team } from "../teams/team.model";
export class Player {
    id?: number;
    name: string;
    nationality: string;
    age: number;
    // playerPositions?: playerHasPosition[]
    team_id: number;
    team?: Team;
    pass: number;
    avatar?: string;
    defense: number;
    speed: number;
    dri: number;
    shoting: number;
    skill?: number


    constructor() {
        //this.playerPositions = [];

    }

}