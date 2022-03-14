import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomennComponent } from './womenn.component';

describe('WomennComponent', () => {
  let component: WomennComponent;
  let fixture: ComponentFixture<WomennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomennComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
