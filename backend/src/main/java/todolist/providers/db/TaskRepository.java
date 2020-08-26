package todolist.providers.db;

import org.springframework.data.mongodb.repository.MongoRepository;
import todolist.core.models.Task;

public interface TaskRepository extends MongoRepository<Task, String> {
}