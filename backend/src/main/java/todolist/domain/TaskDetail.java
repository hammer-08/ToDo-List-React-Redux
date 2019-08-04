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

  public TaskDetail(String id, String value, Boolean done) {
    this.id = id;
    this.value = value;
    this.done = done;
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

  public String toString() {
    return String.format(
        "Customer[id=%s, value='%s', done='%s']",
        id, value, done
    );
  }
}
