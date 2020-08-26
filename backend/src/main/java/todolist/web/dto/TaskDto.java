package todolist.web.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;

/**
 * This class will hold the task details that will be received
 * as a json input.
 */
@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class TaskDto {
  @NotNull
  @JsonProperty("id")
  private String id;

  @NotNull
  @JsonProperty("description")
  private String description;

  @JsonProperty("isDone")
  private Boolean isDone;

  @JsonProperty("creationTimestamp")
  private Long creationTimestamp;

  @JsonProperty("lastEditionTimestamp")
  private Long lastEditionTimestamp;

  public TaskDto(@JsonProperty("id") String id, @JsonProperty("description") String description,
                 @JsonProperty("isDone") Boolean isDone, @JsonProperty("creationTimestamp")
                     Long creationTimestamp, @JsonProperty("lastEditionTimestamp")
                     Long lastEditionTimestamp) {
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