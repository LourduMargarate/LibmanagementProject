import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookreturnComponent } from './createbookreturn.component';

describe('CreatebookreturnComponent', () => {
  let component: CreatebookreturnComponent;
  let fixture: ComponentFixture<CreatebookreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebookreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
