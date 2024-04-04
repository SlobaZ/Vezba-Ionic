import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FiltersFindSortPage } from './filters-find-sort.page';

describe('FiltersFindSortPage', () => {
  let component: FiltersFindSortPage;
  let fixture: ComponentFixture<FiltersFindSortPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersFindSortPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersFindSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
