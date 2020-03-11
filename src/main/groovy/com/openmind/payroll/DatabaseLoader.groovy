package com.openmind.payroll

import groovy.transform.CompileStatic
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
@CompileStatic
class DatabaseLoader implements CommandLineRunner {
  private final EmployeeRepository repository

  DatabaseLoader(EmployeeRepository repository) {
    this.repository = repository
  }

  @Override
  void run(String... args) throws Exception {
    this.repository.save(new Employee(firstName: 'Frodo', lastName: 'Baggins', description: 'ring bearer'))
  }
}
