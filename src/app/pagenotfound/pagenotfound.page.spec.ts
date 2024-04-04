import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PagenotfoundPage } from './pagenotfound.page';

describe('PagenotfoundPage', () => {
  let component: PagenotfoundPage;
  let fixture: ComponentFixture<PagenotfoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagenotfoundPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PagenotfoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
