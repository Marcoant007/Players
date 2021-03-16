import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Positions } from '../position.model';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-positions-read',
  templateUrl: './positions-read.component.html',
  styleUrls: ['./positions-read.component.css']
})
export class PositionsReadComponent implements OnInit {

  public positions: Positions[];
  public positionString: any[];


  constructor(
    private positionService : PositionService,
    private router : Router) {

     }

  async ngOnInit() {
   await this.loadPositions();

  }



  public async loadPositions(){
        this.positions = await this.positionService.listPosition()
  }

  async deletePosition(id: any){
    await this.positionService.deletePosition(id)
    location.reload()
  }

  async navigateToUpdate(positions: Positions){
    this.router.navigate(['/position', positions.id])
  }
}
