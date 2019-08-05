package todolist.web.rest.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import todolist.service.TaskService;
import todolist.web.dto.TaskDTO;

import java.util.List;
import java.util.concurrent.Callable;

/**
 * This class exposes the REST API for the system.
 */
@RepositoryRestController
@Controller
public class TaskController {

  private final TaskService taskService;
  private static Logger logger = LoggerFactory.getLogger(TaskController.class);

  @Autowired
  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }

  /**
   * This method will be used to add tasks to the system.
   *
   * @return a List of {@link TaskDTO} which will notify whether
   * adding the task was successful.
   */

  @RequestMapping(value = "/api/findAllTasks", method = RequestMethod.GET)
  public Callable<ResponseEntity<List<TaskDTO>>> findAllTasks() {
    return () -> {
      List<TaskDTO> tasks = taskService.findAllTasks();
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
  @PostMapping("api/editTask")
  public Callable<ResponseEntity<String>> editTask(@RequestBody TaskDTO request) {
    return () -> {
      logger.debug("Edition requested for TaskId [{}]", request.getTaskId());

      taskService.editTask(request);

      return ResponseEntity.ok(request.getTaskId());
    };
  }

  /**
   * This method will be used to delete tasks;
   */
  @PostMapping("api/deleteTask")
  public Callable<ResponseEntity<String>> deleteTask(@RequestBody String taskId) {
    return () -> {
      taskService.deleteTask(taskId);

      return ResponseEntity.ok(taskId);
    };
  }
}