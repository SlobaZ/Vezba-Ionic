import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ApidataviewPage } from './apidataview.page';

describe('ApidataviewPage', () => {
  let component: ApidataviewPage;
  let fixture: ComponentFixture<ApidataviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApidataviewPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ApidataviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
