package main.java.todolist.dao;

import main.java.todolist.domain.TaskDetail;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public class TaskRepository extends MongoRepository<TaskDetail, String> {
  /**
   * This method finds the task by its id and gives information about it
   *
   * @param id - id of the task for searching.
   * @return returns instance {@link TaskDetail} with information about the task.
   */
  @Query("{ 'id' : {$regex: ?0}}")
  TaskDetail findById(final String id);
}
