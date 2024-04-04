import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import {Apidata} from '../class/apidata';

@Injectable({
  providedIn: 'root'
}) 
export class ApidataService {

  private baseURL = "https://api.slingacademy.com/v1/sample-data/blog-posts";

  constructor(private httpClient: HttpClient) { }


  getApisList(offset:number): Observable<any>{
    return this.httpClient.get<Apidata[]>(`${this.baseURL}?offset=${offset}&limit=5`);  /*  &limit=10  */
  }

  getApiById(id: number): Observable<any>{
    return this.httpClient.get<Apidata>(`${this.baseURL}/${id}`);
  }

  getAll(): Observable<any>{
    return this.httpClient.get<Apidata[]>(`${this.baseURL}?limit=100`);  
  }






}
