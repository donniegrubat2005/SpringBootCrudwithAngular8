import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employees: Employee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.findAll().subscribe(data => {
      this.employees = data;
    });
  }

}
