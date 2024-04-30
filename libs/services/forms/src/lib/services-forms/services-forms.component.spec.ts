import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesFormsComponent } from './services-forms.component';

describe('ServicesFormsComponent', () => {
  let component: ServicesFormsComponent;
  let fixture: ComponentFixture<ServicesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
