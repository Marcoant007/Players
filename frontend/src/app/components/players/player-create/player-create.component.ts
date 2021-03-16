
import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { Positions } from '../../positions/position.model';
import { PositionService } from '../../positions/position.service';
import { Team } from '../../teams/team.model';
import { TeamService } from '../../teams/team.service';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {


  files: Set<File>;



  players: Player;
  teams: Team[];
  positions: Positions[];
  isUpdate: boolean = false
  public id: number

  player: Player = new Player();


  constructor(
    private playerService: PlayerService,
    private teamService: TeamService,
    private positionService: PositionService,
    private router: Router,
  ) { }

  async ngOnInit() {

    await this.init();
    this.player = new Player();
  }

  onChange(event:any) {
      const selectedFiles = <FileList>event.srcElement.files;
      const fileNames = [];
      this.files = new Set();
      for(let i = 0; i< selectedFiles.length; i++){
        fileNames.push(selectedFiles[i].name);
        this.files.add(selectedFiles[i]);
      }
      document.getElementById('customFile').innerHTML = fileNames.join(', ');

  }


  async loadPlayer() {
    this.player = await this.playerService.findByIdPlayer(this.id)
    this.isUpdate = true;

  }

  async onUpload() {

  }

  async savePlayer() {
    try {
      if (this.isUpdate) {
        this.update()
      } else {
        this.savePlayer()
      }
      this.router.navigate(['players'])
    } catch (error) {
      alert(error.error.message)
    }
  }

  async init() {
    try {
      this.positions = await this.positionService.listPosition();
      this.teams = await this.teamService.get();

    } catch (error) {
      alert(error.error.messages[0])
    }

  }

  async createPlayer() {
    console.log('chegou ?')
    try {
      await this.playerService.savePlayer(this.player)
      this.router.navigate(['/players'])
      console.log(this.player, 'ACABOU')
    } catch (error) {
      alert(error.error.error)
    }
  }

  async update() {
    await this.playerService.update(this.id, this.player)
  }

  async cancel() {
    this.router.navigate(['/players'])
  }

}
