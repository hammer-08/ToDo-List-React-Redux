package todolist.service;

import todolist.web.dto.TaskDTO;

/**
 * This interface defines the functionality exposed on the todolist.
 */
public interface TaskService {
  /**
   * This method will get all tasks existing in the repository
   *
   * @return returns array of {@link TaskDTO} instances with tasks' details
   */
  TaskDTO[] findAllTasks();

  /**
   * This method will add a new task to the todolist.
   *
   * @param task an instance of {@link TaskDTO} with the task
   *             details.
   */
  void createTask(final TaskDTO task);
}
