import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelesComponent } from './pasteles.component';

describe('PastelesComponent', () => {
  let component: PastelesComponent;
  let fixture: ComponentFixture<PastelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
