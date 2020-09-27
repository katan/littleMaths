import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiplicationTablesPage } from './multiplication-tables.page.component';

describe('MultiplicationTables.PageComponent', () => {
  let component: MultiplicationTablesPage;
  let fixture: ComponentFixture<MultiplicationTablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicationTablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiplicationTablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
