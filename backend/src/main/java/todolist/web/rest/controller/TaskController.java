package todolist.web.rest.controller;

/*import javax.validation.Valid;

import todolist.constants.MessageConstants;
import todolist.service.TaskService;
import todolist.web.dto.TaskDTO;
import todolist.web.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;*/

/**
 * This class exposes the REST API for the system.
 */
//@RestController
//@RequestMapping("/addTask")
public class TaskController {

  /*@Autowired
  private TaskService taskService;

  *//**
   * This method will be used to add tasks to the system.
   *
   * @param
   * @return an instance of {@link ResponseDTO} which will notify whether
   * adding the task was successful.
   *//*

  @RequestMapping("/findAllTasks")
  public String findAllTasks() {
    System.out.println("Hello");
    return "";
  }

  *//**
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