import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdeatilsComponent } from './batchdeatils.component';

describe('BatchdeatilsComponent', () => {
  let component: BatchdeatilsComponent;
  let fixture: ComponentFixture<BatchdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchdeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
