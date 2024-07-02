import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators'
// Env
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // private requestCount = 0;
  // private requestLimit = 5;
  // private requestInterval = 1000; // in milliseconds
  constructor(private http: HttpClient) { }


  getEmployee(): Observable<any> {
    return this.http.get<any>(environment.API_URI + "/employees");
  }

  getEmployeesDetails(id: number): Observable<any> {
    return this.http.get<any>(environment.API_URI + "/employee/" + id);
  }

  getEdit(id: number, params:any): Observable<any> {
    return this.http.put<any>(environment.API_URI + "/update/"+ id ,params);
  }

  addRecord(params:any): Observable<any> {
    return this.http.post<any>(environment.API_URI + "/create" , params);
  }
}
