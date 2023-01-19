import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
// import { SamplwService } from './samplw.service';
import { HttpTestingController } from '@angular/common/http/testing';
describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should make a POST request with the correct headers', () => {
    service.forTest().subscribe();
    
    const req = httpMock.expectOne(service.postUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.headers.get('pageNumber')).toEqual('0');
    expect(req.request.headers.get('pageSize')).toEqual('5');
    expect(req.request.headers.get('sortOrder')).toEqual('desc');
    expect(req.request.headers.get('sortProperty')).toEqual('employeeCode');
  });
   
});