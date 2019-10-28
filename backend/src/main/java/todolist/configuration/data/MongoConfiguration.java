package todolist.configuration.data;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;

/**
 * This class constructs the mongo client.
 */
@Configuration
public class MongoConfiguration extends AbstractMongoConfiguration {

  private MongoProperties properties;

  @Autowired
  public MongoConfiguration(MongoProperties properties) {
    this.properties = properties;
  }

  @Override
  public MongoClient mongoClient() {
    ServerAddress address;
    try {
      address = new ServerAddress(InetAddress.getByName(properties.getHost()), properties.getPort());
    } catch (UnknownHostException e) {
      address = new ServerAddress();
    }
    return new MongoClient(address);
  }

  @Override
  protected String getDatabaseName() {
    return properties.getDatabasePrefix() + "todolist";
  }

}

