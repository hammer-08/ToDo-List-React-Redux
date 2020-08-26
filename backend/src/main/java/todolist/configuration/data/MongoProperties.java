package todolist.configuration.data;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(value = "mongodb.config", ignoreUnknownFields = false)
public class MongoProperties {
  private int port;
  private String host;
  private String databasePrefix;
  private String username;
  private String password;

  public int getPort() {
    return port;
  }

  public void setPort(int port) {
    this.port = port;
  }

  public String getHost() {
    return host;
  }

  public void setHost(String host) {
    this.host = host;
  }

  public String getDatabasePrefix() {
    return databasePrefix;
  }

  public void setDatabasePrefix(String databasePrefix) {
    this.databasePrefix = databasePrefix;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
