import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDeatilsComponent } from './staff-deatils.component';

describe('StaffDeatilsComponent', () => {
  let component: StaffDeatilsComponent;
  let fixture: ComponentFixture<StaffDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
