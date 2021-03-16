import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReadComponent } from './team-read.component';

describe('TeamReadComponent', () => {
  let component: TeamReadComponent;
  let fixture: ComponentFixture<TeamReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
