import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaSearchComponent } from './plantilla-search.component';

describe('PlantillaSearchComponent', () => {
  let component: PlantillaSearchComponent;
  let fixture: ComponentFixture<PlantillaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
