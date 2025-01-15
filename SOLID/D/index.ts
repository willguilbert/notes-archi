interface DatabaseSaver {
  save(data: string): void;
}

class MySQLDataBase implements DatabaseSaver {
  save(data: string): void {
    console.log(`Currently saving to MySQL...${data}`);
  }
}

class MongoDataBase implements DatabaseSaver {
  save(data: string): void {
    console.log(`Currently saving to Mongo...${data}`);
  }
}

class DatabaseConnector {
  private db: DatabaseSaver;

  constructor(db: DatabaseSaver) {
    this.db = db;
  }
  execute(data: string): void {
    this.db.save(data);
  }
}

let mySQL: DatabaseSaver = new MySQLDataBase();
let mongo: DatabaseSaver = new MongoDataBase();

const s: string = "Welcome !";
let mySQLConnector: DatabaseConnector = new DatabaseConnector(mySQL);
let mongoConnector: DatabaseConnector = new DatabaseConnector(mongo);
mySQLConnector.execute(s);
mongoConnector.execute(s);
