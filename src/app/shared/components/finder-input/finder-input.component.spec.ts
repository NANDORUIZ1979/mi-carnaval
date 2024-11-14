import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderInputComponent } from './finder-input.component';

describe('FinderInputComponent', () => {
  let component: FinderInputComponent;
  let fixture: ComponentFixture<FinderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinderInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
