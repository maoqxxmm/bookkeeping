import { MongoClient, Db } from "mongodb";
import assert from "assert";
import { BillItemDB } from "./schema";

const url = "mongodb://localhost:27017";

const dbName = "bookkeeping";

class Database {
  private db: Db | null;

  constructor() {
    this.init();
    this.db = null;
  }

  init() {
    MongoClient.connect(url, (err, client) => {
      assert.equal(null, err);
      console.log("Connected successfully to databse");
      this.db = client.db(dbName);
    });
  }

  getBillCollection() {
    if (this.db) {
      return this.db.collection<BillItemDB>("bill");
    } else {
      return null;
    }
  }
}

export const database = new Database();
