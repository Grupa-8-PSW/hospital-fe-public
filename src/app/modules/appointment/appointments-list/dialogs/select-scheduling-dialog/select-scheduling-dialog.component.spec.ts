import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSchedulingDialogComponent } from './select-scheduling-dialog.component';

describe('SelectSchedulingDialogComponent', () => {
  let component: SelectSchedulingDialogComponent;
  let fixture: ComponentFixture<SelectSchedulingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSchedulingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSchedulingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
