package todolist.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import todolist.dao.TaskRepository;
import todolist.domain.TaskDetail;
import todolist.service.TaskService;
import todolist.web.dto.TaskDTO;
import org.springframework.stereotype.Service;
import org.apache.commons.lang3.StringUtils;
import todolist.web.transformer.DTOToDomainTransformer;
import todolist.web.transformer.DomainToDtoTransformer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * This service class implements the {@link TaskService} to
 * provide the functionality required for the todolist.
 */
@Service
public class TaskServiceImpl implements TaskService {

  @Autowired
  private TaskRepository taskRepository;

  public List<TaskDTO> findAllTasks() {
    return DomainToDtoTransformer.transformArray(taskRepository.findAll());
  }

  public void editTask(TaskDTO task) {
    TaskDetail taskDtoToPersist = DTOToDomainTransformer.transform(task);
    TaskDetail oldTask = taskRepository.findByValue(taskDtoToPersist.getValue());
    if (oldTask != null) {
      taskRepository.save(taskDtoToPersist);
    } else {
      taskRepository.insert(taskDtoToPersist);
    }
  }
}
