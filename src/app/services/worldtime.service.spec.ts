import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WorldtimeService } from './worldtime.service';

describe('WorldTimeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorldtimeService]
    });
  });

  it('should be initialized', inject([WorldtimeService], (timeService: WorldtimeService) => {
    expect(timeService).toBeTruthy();
  }));
  it(
    'should service return a get method',
    fakeAsync(
      inject(
        [WorldtimeService, HttpTestingController],
        (authService: WorldtimeService, backend: HttpTestingController) => {
          const url = 'Europe/Warsaw';
          authService.time(url).subscribe();
          const requestWrapper = backend.expectOne({ url: 'http://worldtimeapi.org/api/timezone/Europe/Warsaw' });
          tick();
          expect(requestWrapper.request.method).toEqual('GET');
        }
      )
    )
  );
});