import { TestBed, inject } from '@angular/core/testing';

import { AuthRegisterService } from './auth-register.service';

describe('AuthRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRegisterService]
    });
  });

  it('should be created', inject([AuthRegisterService], (service: AuthRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
