package todolist.configuration.logic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import todolist.core.usecases.TaskUseCases;

@Configuration
public class UseCasesConfiguration {
  @Bean
  public TaskUseCases taskUseCases() {
    return new TaskUseCases();
  }
}