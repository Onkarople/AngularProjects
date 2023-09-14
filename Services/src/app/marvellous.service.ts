import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  public GetBatchDetails()
  {
     return [{"Name":"PPA","Fees":18000,"Duration":"3.5 Months"},
     {"Name":"LB","Fees":18200,"Duration":"3 Months"},
     {"Name":"Angular","Fees":18500,"Duration":"5 Months"}];
   
  }
  constructor() 
  {

  }

   
}
