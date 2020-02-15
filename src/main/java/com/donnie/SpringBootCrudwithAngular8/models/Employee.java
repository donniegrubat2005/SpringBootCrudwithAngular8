package com.donnie.SpringBootCrudwithAngular8.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="employees")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String firstname;
	private String lastname;
	private String address;
	
	
	public Employee() {
		super();
   }


	public Employee(int id, String firstname, String lastname, String address) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}

    
	
	
	

}
