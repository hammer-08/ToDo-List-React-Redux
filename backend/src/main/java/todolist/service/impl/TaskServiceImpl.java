package main.java.todolist.service.impl;

import main.java.todolist.dao.TaskRepository;
import main.java.todolist.domain.TaskDetail;
import main.java.todolist.exception.TaskException;
import main.java.todolist.service.TaskService;
import main.java.todolist.web.dto.TaskDTO;
import main.java.todolist.web.transformer.DTOToDomainTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * This service class implements the {@link TaskService} to
 * provide the functionality required for the todolist.
 */
@Service
public class TaskServiceImpl implements TaskService {

  @Autowired
  private TaskRepository taskRepository;

  public void addTask(TaskDTO taskDTO) {
    TaskDetail dbMember = taskRepository.findById(taskDTO.getId());

    if (dbMember != null) {
      throw new TaskException();
    }
    TaskDetail taskToPersist = DTOToDomainTransformer.transform(taskDTO);
    taskRepository.insert(taskToPersist);
  }
}
