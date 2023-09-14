import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBatches } from './Batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{

  //in future this part conatins URL of server(node.js cha server)
  public URL :string ="/assets/Data/Batches.json";

  constructor(public hobj:HttpClient) { }

  public GetBatchDetails() : Observable<IBatches[]>
  {
    return this.hobj.get<IBatches[]>(this.URL);
  }


}


