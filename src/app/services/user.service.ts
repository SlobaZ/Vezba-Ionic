import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import {User} from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "https://api.slingacademy.com/v1/sample-data/users";                      

  constructor(private httpClient: HttpClient) { }


  getAll(offset:number): Observable<any>{
    return this.httpClient.get<User[]>(`${this.baseURL}?offset=${offset}&limit=10`);  
  }

  getApiById(id: number): Observable<any>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  getAllList(): Observable<any>{
    return this.httpClient.get<User[]>(`${this.baseURL}?limit=100`);  
  }






}
