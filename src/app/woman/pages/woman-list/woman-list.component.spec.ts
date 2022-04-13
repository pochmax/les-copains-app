import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanListComponent } from './woman-list.component';

describe('WomanListComponent', () => {
  let component: WomanListComponent;
  let fixture: ComponentFixture<WomanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomanListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
