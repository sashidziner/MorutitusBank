import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url: string = "/includes/customer.json";

  constructor( private http:HttpClient) { }

  getCustomers(){
    return this.http.get(this._url);
  }
  
}
