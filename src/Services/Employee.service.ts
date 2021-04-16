import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { employeeDto } from '../models/employeeDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    console.log(`${environment.api_url}/Employee`);
    
      return this.http.get<employeeDto[]>(`${environment.api_url}/Employee`)
      .pipe(tap(res => { }));
  }

  getById(employeeId: string) {
    console.log(`${environment.api_url}/${employeeId}`);

    return this.http.get<employeeDto>(`${environment.api_url}/Employee/${employeeId}`)
      .pipe(tap(res => { }));
  }
}
