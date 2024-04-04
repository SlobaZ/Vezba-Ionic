import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';

describe('CategoryPage', () => {
  let component: CategoryPage;
  let fixture: ComponentFixture<CategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
