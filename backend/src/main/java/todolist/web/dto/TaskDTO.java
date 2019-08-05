package todolist.web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;

/**
 * This class will hold the task details that will be received
 * as a json input.
 */
@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class TaskDTO {
  @NotNull
  @JsonProperty("taskId")
  private String taskId;

  @JsonProperty("creationDateAndTime")
  private String creationDateAndTime;

  @JsonProperty("creationTimestamp")
  private String creationTimestamp;

  @NotNull
  @JsonProperty("value")
  private String value;

  @JsonProperty("done")
  private Boolean done;

  public TaskDTO(@JsonProperty("taskId") String taskId, @JsonProperty("value") String value,
                 @JsonProperty("done") Boolean done, @JsonProperty("creationDateAndTime")
                     String creationDateAndTime, @JsonProperty("creationTimestamp")
                     String creationTimestamp) {
    this.taskId = taskId;
    this.value = value;
    this.done = done;
    this.creationDateAndTime = creationDateAndTime;
    this.creationTimestamp = creationTimestamp;
  }

  public String getTaskId() {
    return taskId;
  }

  public void setTaskId(String taskId) {
    this.taskId = taskId;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public Boolean isDone() {
    return done;
  }

  public void setDone(Boolean done) {
    this.done = done;
  }

  public String getCreationDateAndTime() {
    return creationDateAndTime;
  }

  public void setCreationDateAndTime(String creationDateAndTime) {
    this.creationDateAndTime = creationDateAndTime;
  }

  public String getCreationTimestamp() {
    return creationTimestamp;
  }

  public void setCreationTimestamp(String creationTimestamp) {
    this.creationTimestamp = creationTimestamp;
  }
}