import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employees: IEmployee[];

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeList();
  }
  
  employeeList() {
    this.empService.findAll().subscribe(data => {
    this.employees = data;
    });
  }

  deleteEmployee(employee: IEmployee): void {
    this.empService.deleteEmployee(employee.id)
    .subscribe(res =>{
     this.employeeList();
      })
  };

   editEmployee(id: number){
    this.router.navigate(['/edit', id]);
  }

 

}
