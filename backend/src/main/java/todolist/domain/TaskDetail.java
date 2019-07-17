package todolist.domain;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * This class holds the details that will be stored about tasks on MongoDB.
 */
@Document(collection = "tasks")
public class TaskDetail {

  @Indexed
  private String value;
  private String id;
  private Boolean isDone;

  public TaskDetail(String id, String value, Boolean isDone) {
    this.id = id;
    this.value = value;
    this.isDone = isDone;
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

  public Boolean getIsDone() {
    return isDone;
  }

  public void setIsDone(Boolean isDone) {
    this.isDone = isDone;
  }
}
