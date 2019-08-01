package todolist.dao;

import com.mongodb.DB;
import com.mongodb.MongoClient;
import org.springframework.data.annotation.Id;

public class MongoDB {
  MongoClient mongoClient = new MongoClient("localhost", 27017);
  DB database = mongoClient.getDB("ToDoListDb");

  MongoDB() {
    database.createCollection("TaskDetail", null);
    database.getCollectionNames().forEach(System.out::println);
  }
}
