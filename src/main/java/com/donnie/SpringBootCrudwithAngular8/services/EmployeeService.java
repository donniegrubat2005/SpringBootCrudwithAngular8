package com.donnie.SpringBootCrudwithAngular8.services;

import java.util.List;

import com.donnie.SpringBootCrudwithAngular8.models.Employee;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;

public interface EmployeeService {

	public List<Employee> findAll();
	public void save(Employee employee);
	public Employee findById(int id);
	public void delete(Employee emp);
}
