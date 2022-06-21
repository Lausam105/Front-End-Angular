import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHabilidadesComponent } from './mis-habilidades.component';

describe('MisHabilidadesComponent', () => {
  let component: MisHabilidadesComponent;
  let fixture: ComponentFixture<MisHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
