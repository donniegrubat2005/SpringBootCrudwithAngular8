package com.donnie.SpringBootCrudwithAngular8.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donnie.SpringBootCrudwithAngular8.models.Employee;
import com.donnie.SpringBootCrudwithAngular8.services.EmployeeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/api/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;

	@GetMapping(path="employees")
	public List<Employee> getEmployee() {
		return employeeService.findAll();
	}
	
	@GetMapping(path="employees/{id}")
    private ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		 Employee emp = employeeService.findById(id);
		 return ResponseEntity.ok().body(emp);
		 //return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@PostMapping(path = "/employees")
	  public Employee postEmployee(@RequestBody Employee employee) {
	 
		employeeService.save(employee);
	    return employee;
	}
	
	@DeleteMapping(path="employees/{id}") 
	 public ResponseEntity<Employee> deleteEmployee(@PathVariable int id) {
	 Employee emp = employeeService.findById(id); 
	 employeeService.delete(emp);
	 return new ResponseEntity<>(HttpStatus.OK);
		
	 }
	
	@PutMapping(path="employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") int id,
            @Valid @RequestBody Employee employee) {
		employeeService.save(employee);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	 
}
