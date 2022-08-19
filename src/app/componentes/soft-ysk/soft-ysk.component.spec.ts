import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftYSkComponent } from './soft-ysk.component';

describe('SoftYSkComponent', () => {
  let component: SoftYSkComponent;
  let fixture: ComponentFixture<SoftYSkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftYSkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftYSkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
