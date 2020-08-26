package todolist.core.contracts;

import todolist.core.models.Task;

import java.util.List;

public interface TaskProvider {
  List<Task> getAllTasks();

  void editTask(Task task);

  void deleteTask(String taskId);
}
