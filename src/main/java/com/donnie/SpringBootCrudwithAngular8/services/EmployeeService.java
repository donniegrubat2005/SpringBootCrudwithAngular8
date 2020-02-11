package com.donnie.SpringBootCrudwithAngular8.services;

import java.util.List;

import com.donnie.SpringBootCrudwithAngular8.models.Employee;

public interface EmployeeService {

	public List<Employee> findAll();
	public Employee findById(int id);
	public void save(Employee employee);
	public void delete(Employee employee);
}
