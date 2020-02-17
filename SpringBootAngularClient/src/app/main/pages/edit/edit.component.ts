import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IEmployee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: IEmployee[];
  empForm: FormGroup;
  id: number;
  

  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {

     this.empForm =this.fb.group({
       id: [''],
       firstname: ['', Validators.required],
       lastname: ['', Validators.required],
       address: ['', Validators.required],
     });

     this.route.paramMap.subscribe((params: ParamMap) => {
      let empId= parseInt(params.get('id'));
      if (empId) {
        this.getEmployee(empId);  
      }
        
     });
  

  }

  getEmployee(id: number) {
    this.empService.getEmployeeId(id)
      .subscribe( data => {
        this.empForm.patchValue(data);
        //console.log(this.empForm.value.firstname = data)
      },
      error => {
       alert(error);
     });
  }

  onSubmit() {
     this.empService.update(this.empForm.value).subscribe(employee => { 
      employee = employee;
      this.gotoEmployeeList(), error => console.log(error)
    });
   }
      
    gotoEmployeeList() {
    this.router.navigate(['/home']);
  }

  cancel() : void {
    this.router.navigate(['/home']);
  }

}
