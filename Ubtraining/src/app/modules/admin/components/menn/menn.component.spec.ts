import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MennComponent } from './menn.component';

describe('MennComponent', () => {
  let component: MennComponent;
  let fixture: ComponentFixture<MennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MennComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
