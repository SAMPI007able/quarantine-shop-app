import { TestBed } from '@angular/core/testing';

import { CustomHTTPInterceptor } from './custom-http.interceptor';

describe('CustomHTTPInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomHTTPInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomHTTPInterceptor = TestBed.inject(CustomHTTPInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
