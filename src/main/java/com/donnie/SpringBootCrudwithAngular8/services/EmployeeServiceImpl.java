package com.donnie.SpringBootCrudwithAngular8.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donnie.SpringBootCrudwithAngular8.models.Employee;
import com.donnie.SpringBootCrudwithAngular8.repositories.EmployeeRepository;

@Service(value="employeeService")
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	/*
	 * public EmployeeServiceImpl(EmployeeRepository employeeRepo) { super();
	 * this.employeeRepository = employeeRepo; }
	 */

	@Override
	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Employee employee) {
		employeeRepository.save(employee);
		
	}

	@Override
	public void delete(Employee employee) {
		employeeRepository.delete(employee);
		
	}

	
}
