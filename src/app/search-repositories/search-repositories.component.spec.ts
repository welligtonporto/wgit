import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRepositoriesComponent } from './search-repositories.component';

describe('SearchRepositoriesComponent', () => {
  let component: SearchRepositoriesComponent;
  let fixture: ComponentFixture<SearchRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
