import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  getNot(update){
    let params = new HttpParams()
    params = params.append('data', update)
    return this.http.get('http://localhost:3000/api/invitations',{ params:params})
  }

}
