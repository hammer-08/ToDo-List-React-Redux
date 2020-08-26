package todolist.providers.db.impl;

import org.springframework.beans.factory.annotation.Autowired;
import todolist.core.contracts.TaskProvider;
import todolist.core.models.Task;
import todolist.providers.db.TaskRepository;

import java.util.List;

/**
 * This service class implements the {@link TaskProvider} to
 * provide the functionality required for the todolist.
 */
public class TaskProviderImpl implements TaskProvider {

  @Autowired
  private TaskRepository taskRepository;

  @Override
  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  @Override
  public void editTask(Task task) {
    taskRepository.save(task);
  }

  @Override
  public void deleteTask(String taskId) {
    taskRepository.deleteById(taskId);
  }
}
