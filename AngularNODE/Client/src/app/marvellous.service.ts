import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  //perform DI
  constructor(private http:HttpClient) { }

  getBatches()
  {
    //connect to the Node_Express Server
    return this.http.get("http://localhost:5100/getBatches");
  }
}
