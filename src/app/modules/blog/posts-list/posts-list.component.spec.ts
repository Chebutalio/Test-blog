import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstsListComponent } from './posts-list.component';

describe('PstsListComponent', () => {
  let component: PstsListComponent;
  let fixture: ComponentFixture<PstsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
