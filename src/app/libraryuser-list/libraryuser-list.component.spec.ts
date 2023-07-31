import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryuserListComponent } from './libraryuser-list.component';

describe('LibraryuserListComponent', () => {
  let component: LibraryuserListComponent;
  let fixture: ComponentFixture<LibraryuserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryuserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
