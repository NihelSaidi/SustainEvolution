import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserCsrComponent } from './dashboard-user-csr.component';

describe('DashboardUserCsrComponent', () => {
  let component: DashboardUserCsrComponent;
  let fixture: ComponentFixture<DashboardUserCsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserCsrComponent]
    });
    fixture = TestBed.createComponent(DashboardUserCsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
