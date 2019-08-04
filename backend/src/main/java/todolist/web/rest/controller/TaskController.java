package todolist.web.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import todolist.service.TaskService;
import todolist.web.dto.TaskDTO;

import java.util.List;

/**
 * This class exposes the REST API for the system.
 */
@RepositoryRestController
@Controller
public class TaskController {

  private final TaskService taskService;

  @Autowired
  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }

  /**
   * This method will be used to add tasks to the system.
   *
   * @param
   * @return a List of {@link TaskDTO} which will notify whether
   * adding the task was successful.
   */

  @RequestMapping(value = "/api/rest", method = RequestMethod.GET)
  @ResponseBody
  public List<TaskDTO> findAllTasks() {
    return taskService.findAllTasks();
  }

  /**
   * This method will be used to add tasks to the system.
   *
   * @param taskDTO the task to add.
   * @return an instance of {@link ResponseDTO} which will notify whether
   * adding the task was successful.
   *//*
  @RequestMapping(method = RequestMethod.POST, produces = {
      MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
  public ResponseDTO createTask(@Valid @RequestBody TaskDTO taskDTO) {
    ResponseDTO responseDTO = new ResponseDTO(ResponseDTO.Status.SUCCESS,
        MessageConstants.TASK_ADDED_SUCCESSFULLY);
    try {
      taskService.createTask(taskDTO);
    } catch (Exception e) {
      responseDTO.setStatus(ResponseDTO.Status.FAIL);
      responseDTO.setMessage(e.getMessage());
    }
    return responseDTO;
  }*/
}