import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloDetailComponent } from './blog-detail.component';

describe('BloDetailComponent', () => {
  let component: BloDetailComponent;
  let fixture: ComponentFixture<BloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
