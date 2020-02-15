import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/employees';
   }

   public findAll(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl);
  }

  getEmployeeId(id: number): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl+ '/'+ id);
  }

  public save(employee: IEmployee) {
    return this.http.post<IEmployee>(this.apiUrl, employee);
  }

  update(employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(this.apiUrl + '/'+ employee.id, employee);
  }

  deleteEmployee(id: number): Observable<IEmployee> {
    return this.http.delete<IEmployee>(this.apiUrl + '/'+id);
  }
}
