package todolist.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * This class holds the details that will be stored about tasks on MongoDB.
 */
@Document(collection = "TaskDetail")
public class TaskDetail {

  @Id
  private String id;

  private String value;
  private Boolean done;
  private String creationDateAndTime;
  private String creationTimestamp;

  public TaskDetail(String id, String value, Boolean done, String creationDateAndTime, String creationTimestamp) {
    this.id = id;
    this.value = value;
    this.done = done;
    this.creationDateAndTime = creationDateAndTime;
    this.creationTimestamp = creationTimestamp;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
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
