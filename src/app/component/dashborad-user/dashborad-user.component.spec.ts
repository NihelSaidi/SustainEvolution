import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradUserComponent } from './dashborad-user.component';

describe('DashboradUserComponent', () => {
  let component: DashboradUserComponent;
  let fixture: ComponentFixture<DashboradUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboradUserComponent]
    });
    fixture = TestBed.createComponent(DashboradUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
