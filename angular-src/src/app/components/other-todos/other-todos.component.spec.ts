import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTodosComponent } from './other-todos.component';

describe('OtherTodosComponent', () => {
  let component: OtherTodosComponent;
  let fixture: ComponentFixture<OtherTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
