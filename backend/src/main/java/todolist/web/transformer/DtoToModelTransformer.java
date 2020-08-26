package todolist.web.transformer;

import todolist.core.models.Task;
import todolist.web.dto.TaskDto;

/**
 * This class will have transformers from and to different types we need. A
 * common class is used in this instance due to the simplicity of the
 * application.
 */
public class DtoToModelTransformer {
  /**
   * This method will trasform an instance of {@link TaskDto}
   * to {@link Task}
   *
   * @param taskDTO an instance of {@link TaskDto} with the details
   *                of the task.
   * @return an instance of {@link TaskDto} with the details
   * of the task.
   */
  public static Task transform(final TaskDto taskDTO) {
    return new Task(taskDTO.getId(), taskDTO.getDescription(), taskDTO.getIsDone(),
        taskDTO.getCreationTimestamp(), taskDTO.getLastEditionTimestamp());
  }
}