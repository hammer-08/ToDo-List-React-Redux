package todolist.configuration.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
@EnableAsync
public class ApplicationConfiguration {

  @Bean
  public AsyncTaskExecutor taskExecutor() {
    ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();

    taskExecutor.setCorePoolSize(10);
    taskExecutor.setMaxPoolSize(100);
    taskExecutor.setQueueCapacity(1000);
    taskExecutor.setWaitForTasksToCompleteOnShutdown(true);
    taskExecutor.setBeanName("Application IO Tasks Thread Pool");
    taskExecutor.setThreadNamePrefix("elastic-io-pool-");

    return taskExecutor;
  }
}
