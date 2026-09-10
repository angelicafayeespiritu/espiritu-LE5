import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenStorage } from './token-storage';

describe('TokenStorage', () => {
  let component: TokenStorage;
  let fixture: ComponentFixture<TokenStorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenStorage],
    }).compileComponents();

    fixture = TestBed.createComponent(TokenStorage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
