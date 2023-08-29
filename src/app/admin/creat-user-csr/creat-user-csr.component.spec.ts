import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatUserCsrComponent } from './creat-user-csr.component';

describe('CreatUserCsrComponent', () => {
  let component: CreatUserCsrComponent;
  let fixture: ComponentFixture<CreatUserCsrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatUserCsrComponent]
    });
    fixture = TestBed.createComponent(CreatUserCsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
