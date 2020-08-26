package todolist.web.rest.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import todolist.core.usecases.TaskUseCases;
import todolist.web.dto.TaskDto;

import java.util.List;
import java.util.concurrent.Callable;

/**
 * This class exposes the REST API for the system.
 */
@RestController
@RequestMapping(value = "/api/task")
public class TaskController {

  @Autowired
  private TaskUseCases taskUseCases;

  private static Logger logger = LoggerFactory.getLogger(TaskController.class);

  /**
   * This method will be used to add tasks to the system.
   *
   * @return a List of {@link TaskDto} which will notify whether
   * adding the task was successful.
   */

  @GetMapping(value = "/findAllTasks")
  public Callable<ResponseEntity<List<TaskDto>>> findAllTasks() {
    return () -> {
      List<TaskDto> tasks = taskUseCases.findAllTasks();
      return ResponseEntity.ok(tasks);
    };
  }

  /**
   * This method will be used to add/edit tasks.
   *
   * @param request - the task to add/edit.
   * @return an instance of {@link ResponseEntity} which will notify whether
   * adding/editing the task was successful.
   */
  @PostMapping
  public Callable<ResponseEntity<List<TaskDto>>> editTask(@RequestBody TaskDto request) {
    return () -> {
      logger.debug("Edition requested for TaskId [{}]", request.getId());

      taskUseCases.editTask(request);

      return ResponseEntity.ok(taskUseCases.findAllTasks());
    };
  }

  /**
   * This method will be used to delete tasks;
   */
  @DeleteMapping("/{id}")
  public Callable<ResponseEntity<List<TaskDto>>> deleteTask(@PathVariable String id) {
    return () -> {
      taskUseCases.deleteTask(id);

      return ResponseEntity.ok(taskUseCases.findAllTasks());
    };
  }
}