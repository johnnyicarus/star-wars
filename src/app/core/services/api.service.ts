import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityType } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {}

  private httpGet(url: string): Observable<Object> {
    console.log(url);
    return this.http.get(url);
  }

  getPage(type: EntityType = 'films', term: string, page: number = 1): Observable<any> {
    let completeUrl = `${this.baseUrl}${type}/`;
    if (!!term || page) {
      completeUrl = `${completeUrl}?`;
    }
    if (!!term) {
      completeUrl = `${completeUrl}search=${term}`;
    }
    if (page && !!term) {
      completeUrl = `${completeUrl}&`;
    }
    if (page) {
      completeUrl += `${completeUrl}page=${page}`;
    }
    return this.httpGet(completeUrl);
  }

  getEntity(type: EntityType, id: string): Observable<Object> {
    const completeUrl = `${this.baseUrl}${type}/${id}`;
    return this.httpGet(completeUrl);
  }
}
