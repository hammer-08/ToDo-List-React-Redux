package todolist.web.transformer;

import todolist.domain.TaskDetail;
import todolist.web.dto.TaskDTO;

import java.util.ArrayList;
import java.util.List;

public class DomainToDtoTransformer {
  public static TaskDTO transform(final TaskDetail taskDetail) {
    return new TaskDTO (taskDetail.getTaskId(), taskDetail.getValue(), taskDetail.isDone(),
        taskDetail.getCreationDateAndTime(), taskDetail.getCreationTimestamp());
  }

  public static List<TaskDTO> transformArray(final List<TaskDetail> taskDetailList) {
    List<TaskDTO> taskDTOList = new ArrayList<>();
    taskDetailList.forEach(t -> taskDTOList.add(transform(t)));
    return taskDTOList;
  }
}
