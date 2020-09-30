import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountdownChallengePage } from './countdown-challenge.page';

describe('CountdownChallengePage', () => {
  let component: CountdownChallengePage;
  let fixture: ComponentFixture<CountdownChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
