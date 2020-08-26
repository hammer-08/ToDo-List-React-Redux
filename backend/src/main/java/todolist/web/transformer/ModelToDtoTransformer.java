package todolist.web.transformer;

import todolist.core.models.Task;
import todolist.web.dto.TaskDto;

import java.util.ArrayList;
import java.util.List;

/**
 * This class will have transformers from and to different types we need. A
 * common class is used in this instance due to the simplicity of the
 * application.
 */

public class ModelToDtoTransformer {
  /**
   * This method will trasform an instance of {@link Task}
   * to {@link TaskDto}
   *
   * @param task an instance of {@link Task} with the details
   *                   of the task.
   * @return an instance of {@link TaskDto} with the details
   * of the task.
   */
  public static TaskDto transform(final Task task) {
    return new TaskDto(task.getId(), task.getDescription(), task.getIsDone(),
        task.getCreationTimestamp(), task.getLastEditionTimestamp());
  }

  /**
   * This method will trasform an array of instances of {@link Task}
   * to array of {@link TaskDto}
   *
   * @param taskList - array of instances of {@link Task} with the details
   *                   of the tasks.
   * @return array of instances of {@link TaskDto} with the details
   * of the tasks.
   */
  public static List<TaskDto> transformArray(final List<Task> taskList) {
    List<TaskDto> taskDtoList = new ArrayList<>();
    taskList.forEach(t -> taskDtoList.add(transform(t)));
    return taskDtoList;
  }
}

