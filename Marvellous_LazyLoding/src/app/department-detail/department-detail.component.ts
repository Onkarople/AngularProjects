import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HrService } from '../hr.service';
@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Thank for selecting the department</h2>
    <h3>You selected Department with ID = {{departmentId}}</h3> 
    <table>
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let value of dt[departmentId-1]">
            <td>{{value.Name}}</td>
            <td>{{value.Age}}</td>
            <td>{{value.Salary}}</td>
        </tr>
    </tbody>
</table>
    <router-outlet></router-outlet>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId : any;
  public dt :any=[[]];
  


  constructor(private route: ActivatedRoute, private router: Router,private _hrser: HrService) 
  {

  }

  ngOnInit() 
  {
    this._hrser.getDstails().subscribe(data=>this.dt=data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;

    });
    
    

    
  }

  gotoDepartments() 
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
