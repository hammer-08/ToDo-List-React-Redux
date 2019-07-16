package main.java.todolist.web.transformer;

import main.java.todolist.domain.TaskDetail;
import main.java.todolist.web.dto.TaskDTO;

/**
 * This class will have transformers from and to different types we need. A
 * common class is used in this instance due to the simplicity of the
 * application.
 */
public class DTOToDomainTransformer {

  /**
   * This method will trasform an instance of {@link TaskDTO}
   * to {@link TaskDetail}
   *
   * @param taskDTO
   *            an instance of {@link TaskDTO} with the details
   *            of the task.
   * @return an instance of {@link TaskDTO} with the details
   *         of the task.
   */
  public static TaskDetail transform(final TaskDTO taskDTO) {
    return new TaskDetail(taskDTO.getId(), taskDTO.getValue(), taskDTO.getIsDone());
  }
}
