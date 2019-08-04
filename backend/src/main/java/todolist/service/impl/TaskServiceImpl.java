package todolist.service.impl;

import todolist.service.TaskService;
import todolist.web.dto.TaskDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * This service class implements the {@link TaskService} to
 * provide the functionality required for the todolist.
 */
@Service
public class TaskServiceImpl implements TaskService {
  public List<TaskDTO> findAllTasks() {
    List<TaskDTO> list = new ArrayList<>();
    TaskDTO task1 = new TaskDTO("4kd93", "task1", false);
    TaskDTO task2 = new TaskDTO("24d32", "task2", false);
    list.add(task1);
    list.add(task2);
    return list;
  }
}
