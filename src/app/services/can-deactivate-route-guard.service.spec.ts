import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateRouteGuardService } from './can-deactivate-route-guard.service';

describe('CanDeactivateRouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateRouteGuardService]
    });
  });

  it('should be created', inject([CanDeactivateRouteGuardService], (service: CanDeactivateRouteGuardService) => {
    expect(service).toBeTruthy();
  }));
});
