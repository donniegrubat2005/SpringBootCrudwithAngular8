import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: Employee[];
  empForm: FormGroup;
  id: number;
  

  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router
    ,private route: ActivatedRoute) { }

  ngOnInit(): void {

     this.empForm =this.fb.group({
       id: [''],
       firstname: [''],
       lastname: [''],
       address: [''],
     });

     this.route.paramMap.subscribe((params: ParamMap) => {
      let empId= parseInt(params.get('id'));
      
      this.empService.getEmployeeId(empId)
      .subscribe( data => {
        this.empForm.setValue(data);
      });
     });
  

  }

  onSubmit() {
    this.empService.update(this.empForm.value)
      .subscribe(
        data => {
         this.gotoList();
        },
        error => {
          alert(error);
        });
      
    }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
