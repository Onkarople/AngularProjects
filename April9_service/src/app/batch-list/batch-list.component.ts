import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent 
{
  public Batches=[{"Name":"PPA","Fees":18000,"Duration":"3.5 Months"},
  {"Name":"LB","Fees":18200,"Duration":"3 Months"},
  {"Name":"Angular","Fees":18500,"Duration":"5 Months"}];
}
