import { TestBed, inject } from '@angular/core/testing';

import { CanActivateRouteGuard } from './can-activate-route-guard.service';

describe('CanActivateRouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRouteGuard]
    });
  });

  it('should be created', inject([CanActivateRouteGuard], (service: CanActivateRouteGuard) => {
    expect(service).toBeTruthy();
  }));
});
