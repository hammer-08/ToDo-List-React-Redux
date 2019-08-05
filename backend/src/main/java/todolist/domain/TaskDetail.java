package todolist.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * This class holds the details that will be stored about tasks on MongoDB.
 */
@Document(collection = "TaskDetail")
public class TaskDetail {

  @Id
  private String taskId;

  private String value;
  private Boolean done;
  private String creationDateAndTime;
  private String creationTimestamp;

  public TaskDetail(String taskId, String value, Boolean done, String creationDateAndTime, String creationTimestamp) {
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
