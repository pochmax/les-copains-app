import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanFormComponent } from './woman-form.component';

describe('WomanFormComponent', () => {
  let component: WomanFormComponent;
  let fixture: ComponentFixture<WomanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomanFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
