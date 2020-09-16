import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = 'https://nbtest.free.beeceptor.com/miner';
  constructor(private http: HttpClient) { }

  sendPostRequest() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, {headers: headers}).subscribe(res => console.log(res));
  }
}
