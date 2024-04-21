import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCryptoComponent } from './all-crypto.component';

describe('AllCryptoComponent', () => {
  let component: AllCryptoComponent;
  let fixture: ComponentFixture<AllCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCryptoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
