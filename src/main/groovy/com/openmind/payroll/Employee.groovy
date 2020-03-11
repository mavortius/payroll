package com.openmind.payroll

import groovy.transform.CompileStatic
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
@CompileStatic
@ToString
@EqualsAndHashCode
class Employee {
  @Id
  @GeneratedValue
  Long id
  String firstName
  String lastName
  String description
}
