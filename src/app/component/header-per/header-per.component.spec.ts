import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPerComponent } from './header-per.component';

describe('HeaderPerComponent', () => {
  let component: HeaderPerComponent;
  let fixture: ComponentFixture<HeaderPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
