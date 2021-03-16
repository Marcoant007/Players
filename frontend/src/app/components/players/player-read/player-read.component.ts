import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-read',
  templateUrl: './player-read.component.html',
  styleUrls: ['./player-read.component.css']
})
export class PlayerReadComponent implements OnInit {

  players: any[];
  displayedColumns: ['name']


  constructor( private playerService: PlayerService ) { }

  async ngOnInit() {
    this.loadPlayers();

  }

  public async loadPlayers(){
    this.players = await this.playerService.get();
   
  }

    

}
