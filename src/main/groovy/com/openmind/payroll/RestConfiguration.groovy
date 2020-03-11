package com.openmind.payroll

import groovy.transform.CompileStatic
import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer

@Configuration
@CompileStatic
class RestConfiguration implements RepositoryRestConfigurer {
  @Override
  void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    config.basePath = '/api'
    config.exposeIdsFor(Employee)
  }
}
