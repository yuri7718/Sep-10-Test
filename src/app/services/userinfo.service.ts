import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http: HttpClient) { }

  private _url="/assets/userinfo.json";
  getUserInfo() {
    return this.http.get(this._url);
  }
}
