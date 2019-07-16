package main.java.todolist.service;

import main.java.todolist.web.dto.TaskDTO;

/**
 * This interface defines the functionality exposed on the todolist.
 */
public interface TaskService {
  /**
   * This method will add a new task to the todolist.
   *
   * @param task an instance of {@link TaskDTO} with the member
   *             details.
   */
  void addTask(final TaskDTO task);
}
