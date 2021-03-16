import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  isUpdate: boolean = false;
  team: Team = new Team();
  public id:number;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private teamService : TeamService
    ) { }

  async ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params.id;
      if(this.id){
        this.loadTeam();
      }
    })
  }



  async loadTeam(){
    this.team = await this.teamService.findById(this.id);
    this.isUpdate = true;
    console.log(this.team)
  }

  async saveTeam(){
    try{
      if(this.isUpdate){
        this.update();
      }else {
        this.save()
      }
      this.router.navigate(['teams']);
     

    } catch(error){
      alert(error.error.message)
    }
   
  }

  async update(){
    await this.teamService.update(this.id,this.team) 
  }

  async save(){
    await this.teamService.save(this.team)
    alert('Posição cadastrada com suceso')
    this.router.navigate(['teams'])
  }

  async cancel(){
    this.router.navigate(['teams'])
  }

}
