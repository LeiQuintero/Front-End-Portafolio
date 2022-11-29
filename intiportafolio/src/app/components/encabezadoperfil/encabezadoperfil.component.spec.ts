import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoperfilComponent } from './encabezadoperfil.component';

describe('EncabezadoperfilComponent', () => {
  let component: EncabezadoperfilComponent;
  let fixture: ComponentFixture<EncabezadoperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
