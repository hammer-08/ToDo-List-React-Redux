package todolist.service.impl;

import org.springframework.transaction.annotation.Transactional;
import todolist.dao.TaskRepository;
import todolist.domain.TaskDetail;
import todolist.exception.TaskException;
import todolist.service.TaskService;
import todolist.web.dto.TaskDTO;
import todolist.web.transformer.DTOToDomainTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * This service class implements the {@link TaskService} to
 * provide the functionality required for the todolist.
 */
@Service
public class TaskServiceImpl implements TaskService {

  @Autowired
  private TaskRepository taskRepository;
}
