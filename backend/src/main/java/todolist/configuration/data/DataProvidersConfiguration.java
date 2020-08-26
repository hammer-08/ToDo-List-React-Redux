package todolist.configuration.data;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import todolist.core.contracts.TaskProvider;
import todolist.providers.db.impl.TaskProviderImpl;

@Configuration
public class DataProvidersConfiguration {

  @Bean
  public TaskProvider taskProvider() {
    return new TaskProviderImpl();
  }
}
