import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPastelesComponent } from './carrusel-pasteles.component';

describe('CarruselPastelesComponent', () => {
  let component: CarruselPastelesComponent;
  let fixture: ComponentFixture<CarruselPastelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselPastelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselPastelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
