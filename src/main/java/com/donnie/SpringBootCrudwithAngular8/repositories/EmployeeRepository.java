package com.donnie.SpringBootCrudwithAngular8.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.donnie.SpringBootCrudwithAngular8.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
