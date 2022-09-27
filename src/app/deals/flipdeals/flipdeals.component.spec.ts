import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipdealsComponent } from './flipdeals.component';

describe('FlipdealsComponent', () => {
  let component: FlipdealsComponent;
  let fixture: ComponentFixture<FlipdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
