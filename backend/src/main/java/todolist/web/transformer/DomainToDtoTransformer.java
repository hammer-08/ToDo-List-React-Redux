package todolist.web.transformer;

import todolist.domain.TaskDetail;
import todolist.web.dto.TaskDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * This class will have transformers from and to different types we need. A
 * common class is used in this instance due to the simplicity of the
 * application.
 */
public class DomainToDtoTransformer {
  /**
   * This method will trasform an instance of {@link TaskDetail}
   * to {@link TaskDTO}
   *
   * @param taskDetail an instance of {@link TaskDetail} with the details
   *                   of the task.
   * @return an instance of {@link TaskDTO} with the details
   * of the task.
   */
  public static TaskDTO transform(final TaskDetail taskDetail) {
    return new TaskDTO(taskDetail.getTaskId(), taskDetail.getValue(), taskDetail.isDone(),
        taskDetail.getCreationDateAndTime(), taskDetail.getCreationTimestamp());
  }

  /**
   * This method will trasform an array of instances of {@link TaskDetail}
   * to array of {@link TaskDTO}
   *
   * @param taskDetailList - array of instances of {@link TaskDetail} with the details
   *                   of the tasks.
   * @return array of instances of {@link TaskDTO} with the details
   * of the tasks.
   */
  public static List<TaskDTO> transformArray(final List<TaskDetail> taskDetailList) {
    List<TaskDTO> taskDTOList = new ArrayList<>();
    taskDetailList.forEach(t -> taskDTOList.add(transform(t)));
    return taskDTOList;
  }
}
