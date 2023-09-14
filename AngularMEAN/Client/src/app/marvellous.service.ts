import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBatches } from './Batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  //perform DI
  constructor(private http:HttpClient) { }

  getBatches() : Observable<IBatches[]>
  {
    //connect to the Node_Express Server
    return this.http.get<IBatches[]>("http://localhost:5100/getBatches");
  }
}
