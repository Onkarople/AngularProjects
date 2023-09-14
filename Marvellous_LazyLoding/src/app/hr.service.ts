import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Names } from './Name';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http:HttpClient) { }

  private _url:string = "http://localhost:5100/gethr"

  getDstails():Observable<Names[]>
  {
    return this.http.get<Names[]>(this._url);
  }
}
