import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRepositoriesComponent } from './my-repositories.component';

describe('MyRepositoriesComponent', () => {
  let component: MyRepositoriesComponent;
  let fixture: ComponentFixture<MyRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
