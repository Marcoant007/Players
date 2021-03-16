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

  produtos: any[];

  positions: Positions[]

  constructor(
    private positionService : PositionService,
    private router : Router

  ) { }

  async ngOnInit() {
    this.loadPositions();

    this.produtos =  [
      {
        id: 1,
        name: 'calular',
        categorias: [
          {
            id: 1,
            name: 'Eletronico'
          },
          {
            id: 1,
            name: 'Smarthphone'
          },
        ]
      },
      {
        id: 1,
        name: 'mouse',
        categorias: [
          {
            id: 1,
            name: 'Eletronico'
          },
          {
            id: 1,
            name: 'sei la'
          },
        ]
      },
      {
        id: 1,
        name: 'teclado',
        categorias: [
          {
            id: 1,
            name: 'Eletronico'
          },
          {
            id: 1,
            name: 'qualquer uma'
          },
        ]
      }
    ]

    this.produtos = this.produtos.map(produto => (
      {
        id: produto.id,
        name: produto.name,
        categorias: produto.categorias.map((categoria: any) => categoria.name)
      }
    ));

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
