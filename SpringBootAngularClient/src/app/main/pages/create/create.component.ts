import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
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
