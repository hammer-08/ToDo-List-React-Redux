package todolist.core.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * This class holds the details about tasks that will be stored on MongoDB.
 */
@Document(collection = "Task")
public class Task {

  @Id
  private String id;

  private String description;
  private Boolean isDone;
  private Long creationTimestamp;
  private Long lastEditionTimestamp;

  public Task(String id, String description, Boolean isDone, Long creationTimestamp, Long lastEditionTimestamp) {
    this.id = id;
    this.description = description;
    this.isDone = isDone;
    this.creationTimestamp = creationTimestamp;
    this.lastEditionTimestamp = lastEditionTimestamp;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Boolean getIsDone() {
    return isDone;
  }

  public void setIsDone(Boolean isDone) {
    this.isDone = isDone;
  }

  public Long getCreationTimestamp() {
    return creationTimestamp;
  }

  public void setCreationTimestamp(Long creationTimestamp) {
    this.creationTimestamp = creationTimestamp;
  }

  public Long getLastEditionTimestamp() {
    return lastEditionTimestamp;
  }

  public void setLastEditionTimestamp(Long lastEditionTimestamp) {
    this.lastEditionTimestamp = lastEditionTimestamp;
  }
}
