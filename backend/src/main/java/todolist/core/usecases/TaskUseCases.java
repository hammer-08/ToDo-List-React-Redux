package todolist.core.usecases;

import org.springframework.beans.factory.annotation.Autowired;
import todolist.core.contracts.TaskProvider;
import todolist.core.models.Task;
import todolist.web.dto.TaskDto;
import todolist.web.transformer.DtoToModelTransformer;
import todolist.web.transformer.ModelToDtoTransformer;

import java.util.List;

public class TaskUseCases {

  @Autowired
  private TaskProvider taskProvider;

  public List<TaskDto> findAllTasks() {
    return ModelToDtoTransformer.transformArray(taskProvider.getAllTasks());
  }

  public void editTask(TaskDto taskDto) {
    Task task = DtoToModelTransformer.transform(taskDto);
    taskProvider.editTask(task);
  }

  public void deleteTask(String taskId) {
    taskProvider.deleteTask(taskId);
  }
}
