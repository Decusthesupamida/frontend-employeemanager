import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable <Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }
  public addEmployees(employee : Employee): Observable <Employee>{
    return this.httpClient.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
  }
  public updateEmployees(employee : Employee): Observable <Employee>{
    return this.httpClient.put<Employee>(`${this.apiServerUrl}/employee/update`,employee);
  }
  public deleteEmployees(employeeId : number): Observable <void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
  
}
