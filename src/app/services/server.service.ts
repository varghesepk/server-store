import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Server } from '../model/server';

@Injectable()
export class ServerService {
  apiUrl = 'http://85.17.31.99:4300/api/servers';  // URL to web api

  constructor(private http: HttpClient) { }

  /* GET server whose name contains search term */
  getServers(filterForm: any): Observable<Server[]> {
    // Add safe, URL encoded search parameter if there is a search term
    let queryString = '';
    if(filterForm) {
      queryString += filterForm.storageMin && 'storageMin=' + filterForm.storageMin + '&';
      queryString += filterForm.storageMax && 'storageMax=' + filterForm.storageMax + '&';
      queryString += filterForm.ram && 'ram=' + filterForm.ram + '&';
      queryString += filterForm.hdd && 'hdd=' + filterForm.hdd + '&';
      queryString += filterForm.location && 'location=' + filterForm.location;
    }

    let url = this.apiUrl + '?' + queryString;

    return this.http.get<Server[]>(url)
      .pipe(
        map(res => res['servers'])
      );
  }
}
