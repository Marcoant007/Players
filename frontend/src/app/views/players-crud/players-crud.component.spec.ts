import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersCrudComponent } from './players-crud.component';

describe('PlayersCrudComponent', () => {
  let component: PlayersCrudComponent;
  let fixture: ComponentFixture<PlayersCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
