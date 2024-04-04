import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserviewPage } from './userview.page';

describe('UserviewPage', () => {
  let component: UserviewPage;
  let fixture: ComponentFixture<UserviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserviewPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
