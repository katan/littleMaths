import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomChallengePage } from './random-challenge.page';

describe('RandomChallengePage', () => {
  let component: RandomChallengePage;
  let fixture: ComponentFixture<RandomChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
