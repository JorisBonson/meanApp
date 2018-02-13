import { TestBed, inject } from '@angular/core/testing';

import { AuthLoginService } from './auth-login.service';

describe('AuthLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLoginService]
    });
  });

  it('should be created', inject([AuthLoginService], (service: AuthLoginService) => {
    expect(service).toBeTruthy();
  }));
});
