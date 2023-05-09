import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformeComponent } from './editforme.component';

describe('EditformeComponent', () => {
  let component: EditformeComponent;
  let fixture: ComponentFixture<EditformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
