import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-players-crud',
  templateUrl: './players-crud.component.html',
  styleUrls: ['./players-crud.component.css']
})
export class PlayersCrudComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  navigateToPlayerCreate(): void{
    this.router.navigate(['/player'])
  }

}
