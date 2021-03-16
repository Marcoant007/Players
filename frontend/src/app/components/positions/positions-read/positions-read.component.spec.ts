import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsReadComponent } from './positions-read.component';

describe('PositionsReadComponent', () => {
  let component: PositionsReadComponent;
  let fixture: ComponentFixture<PositionsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
