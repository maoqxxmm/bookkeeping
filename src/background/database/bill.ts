import { database } from ".";
import { BillItemCreate } from "./schema";

class BillCollection {
  constructor() {}
  getCollection() {
    const col = database.getBillCollection();
    if (col) {
      return col;
    } else {
      throw Error("no collection");
    }
  }
  addOneBill(data: BillItemCreate) {
    this.getCollection().insertOne(data, (err, result) => {
      console.log(err);
      console.log(result);
    });
  }
}

export const billCollection = new BillCollection();
