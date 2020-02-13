import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/employees';
   }

   public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
