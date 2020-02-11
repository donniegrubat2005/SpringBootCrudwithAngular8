package com.donnie.SpringBootCrudwithAngular8.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donnie.SpringBootCrudwithAngular8.models.Employee;
import com.donnie.SpringBootCrudwithAngular8.services.EmployeeService;

@RestController
@RequestMapping(path="/api/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("employees")
	public List<Employee> GetAllEmployee() {
		return employeeService.findAll();
	}
	
}
