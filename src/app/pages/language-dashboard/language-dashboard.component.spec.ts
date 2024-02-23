import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDashboardComponent } from './language-dashboard.component';

describe('LanguageDashboardComponent', () => {
  let component: LanguageDashboardComponent;
  let fixture: ComponentFixture<LanguageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
