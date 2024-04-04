import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserviewApidataPage } from './userview-apidata.page';

describe('UserviewApidataPage', () => {
  let component: UserviewApidataPage;
  let fixture: ComponentFixture<UserviewApidataPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserviewApidataPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserviewApidataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
