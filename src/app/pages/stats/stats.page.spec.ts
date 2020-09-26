import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '@shared/explore-container/explore-container.module';

import { StatsPage } from './stats.page';

describe('Tab2Page', () => {
  let component: StatsPage;
  let fixture: ComponentFixture<StatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
