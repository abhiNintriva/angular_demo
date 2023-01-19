import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTaskComponent } from './sample-task.component';
import { By } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../auth/login/login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
export class Mockservice {
  public showposts(value1: any, value2: any, value3: any, value4: any) {
    return this;
  }
}
describe('SampleTaskComponent', () => {
  let component: SampleTaskComponent;
  let fixture: ComponentFixture<SampleTaskComponent>;

  beforeEach(async () => {
    let mockService = new Mockservice();
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      declarations: [SampleTaskComponent],
      providers: [
        { provider: LoginService, useValue: mockService },
        // { this.sortProperty = 'employeeCode';
        // this.sortOrder = 'asc';}
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(SampleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sdffd', () => {
    // const spy = spyOn()
    // create spy of service
    component.ngOnInit();
    // expect(spy). ();
  });


  it('should sort by employeeCode in ascending order', () => {
    component.sortProperty = 'firstName';
    component.sortOrder = 'asc';
    component.firstNameSort(event);
    expect(component.sortProperty).toEqual('firstName');
    expect(component.sortOrder).toEqual('desc');
    // expect(component.list).toHaveBeenCalled();
  });

  it('should sort by empCode in desnd ',() => {
    component.sortProperty = 'firstName';
    component.sortOrder = 'desc';
    component.firstNameSort(event);
    expect(component.sortProperty).toEqual('firstName');
    expect(component.sortOrder).toEqual('asc');
    
  });

  it('should sort by firstName in descending order', () => {
    component.sortProperty = 'firstName';
    component.sortOrder = 'desc';
    component.firstNameSort(event);
    expect(component.sortOrder).toEqual('asc');
  });

  it('should sort by employeeCode in descending order njan ezhuthiyath', () => {
    component.sortProperty = 'firstName';
    component.sortOrder = 'asc';
    component.empCode(event);
    expect(component.sortProperty).toEqual('employeeCode');
    expect(component.sortOrder).toEqual('desc');
  })

  it('should sort by firstName ascending order ',()=>{
    component.sortProperty = 'employeeCode';
    component.sortOrder = 'desc';
    component.empCode(event);
    expect(component.sortOrder).toEqual('asc');
  })

  it('should call list method', () => {
    spyOn(component, 'list');
    component.firstNameSort(event);
    expect(component.list).toHaveBeenCalled();
  });





  it('pagination ', () => {
    component.paginate({ page: 2, rows: 10 });
    expect(component.page).toBe(2);
    expect(component.pageSize).toBe(10);
  });

  it('tooltip', () => {
    const projects = [{ project: 'test1' ,id:1}, { project: 'test2' ,id:2}, { project: 'test3',id:3 }];
    const result = component.getTooltipName(projects);
    expect(result).toEqual(['Test2', 'Test3']);
  });

  it('employee list', () => {
    component.list()
  })



});
