import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-crud',
  templateUrl: './position-crud.component.html',
  styleUrls: ['./position-crud.component.css']
})
export class PositionCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPositionCreate(){
    this.router.navigate(['/position'])
  }
}
