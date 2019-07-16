package main.java.todolist.web.rest.controller;

import javax.validation.Valid;

import main.java.todolist.constants.MessageConstants;
import main.java.todolist.service.TaskService;
import main.java.todolist.web.dto.TaskDTO;
import main.java.todolist.web.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class exposes the REST API for the system.
 *
 */
@RestController
@RequestMapping("/addTask")
public class TaskController {

  @Autowired
  private TaskService taskService;

  /**
   * This method will be used to add tasks to the system.
   *
   * @param taskDTO the task to add.
   * @return an instance of {@link responseDTO} which will notify whether
   * adding the task was successful.
   */
  @ResponseBody
  @ResponseStatus(value = HttpStatus.CREATED)
  @RequestMapping(method = RequestMethod.POST, produces = {
      MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
  public ResponseDTO addTask(@Valid @RequestBody TaskDTO taskDTO) {
    ResponseDTO responseDTO = new ResponseDTO(ResponseDTO.Status.SUCCESS,
        MessageConstants.MEMBER_ADDED_SUCCESSFULLY);
    try {
      taskService.addMember(justiceLeagueMember);
    } catch (Exception e) {
      responseDTO.setStatus(ResponseDTO.Status.FAIL);
      responseDTO.setMessage(e.getMessage());
    }
    return responseDTO;
  }
}