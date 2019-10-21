import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { API_BASE_URL } from '../services/config';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap, retryWhen, delay } from 'rxjs/operators';


@Injectable()

export class AppService {

    constructor(private http: HttpClient, @Inject(API_BASE_URL) private apiUrl?: string) { }

    getCusDetails(customerid: any) {
        // debugger;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.authKey
        });
        const params = { 'customer': customerid };
        return this.http.get('/assets/customer.json', { params }).pipe(retry(0));
    }



    apiCusDetails() {
        // debugger;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.authKey
        });
        const params = {};
        return this.http.get(this.apiUrl + '/users',  { params });
    }
}
