package com.openmind.payroll

import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface EmployeeRepository extends CrudRepository<Employee, Long> {
}