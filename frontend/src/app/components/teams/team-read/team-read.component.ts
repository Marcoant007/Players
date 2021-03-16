import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-read',
  templateUrl: './team-read.component.html',
  styleUrls: ['./team-read.component.css']
})
export class TeamReadComponent implements OnInit {

    teams: Team[];

  constructor( private teamService : TeamService,
      private router : Router ) { }

  async ngOnInit() {
    this.loadTeams()
  }

  public async loadTeams(){
    this.teams = await this.teamService.get();
  }

  async delete(id: any){
    await this.teamService.delete(id)
    location.reload()
  }

  async navigateToUpdate(team: Team){
    this.router.navigate(['/teams', team.id])
    
}

}
