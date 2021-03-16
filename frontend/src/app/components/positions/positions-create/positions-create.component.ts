import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Positions } from '../position.model';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-positions-create',
  templateUrl: './positions-create.component.html',
  styleUrls: ['./positions-create.component.css']
})
export class PositionsCreateComponent implements OnInit {

  position: Positions = new Positions();
  public id:number;
  isUpdate: boolean = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private positionService : PositionService


  ) { }

  async ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params.id;
      if(this.id){
        this.loadPositions()
      }
    })
  }

  async loadPositions(){
    this.position = await this.positionService.findByIdPosition(this.id);
    this.isUpdate = true;


  }


  async saveEver(){
    try{
      if (this.isUpdate) {
        this.update();
      } else {
        this.savePosition();
      }
    } catch(error){
      alert(error.error.message);
    }
    
  }

  async update(){
    await this.positionService.updatePosition(this.id, this.position);
  }


  async savePosition(){
   await this.positionService.savePosition(this.position);
   this.router.navigate(['positions']);
  }

  async cancel(){
    this.router.navigate(['positions']);
  }

}
