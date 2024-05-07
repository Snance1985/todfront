import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoolPageComponent } from './addtool-page.component';

describe('AddtoolPageComponent', () => {
  let component: AddtoolPageComponent;
  let fixture: ComponentFixture<AddtoolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtoolPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
