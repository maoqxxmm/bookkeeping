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
  addOneBill(data: BillItemCreate): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getCollection().insertOne(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}

export const billCollection = new BillCollection();
