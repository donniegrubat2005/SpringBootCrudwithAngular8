import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  empForm: FormGroup;

  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    this.empForm =this.fb.group({
      id: [''],
      firstname: [''],
      lastname: [''],
      address: [''],
    })
  }

  onSubmit() {
    this.empService.save(this.empForm.value).subscribe(
      result => this.gotoEmployeeList(), error => console.log(error));
  }
 
  gotoEmployeeList() {
    this.router.navigate(['/home']);
  }

}
