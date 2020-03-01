import { ipcRenderer } from "electron";
import { BillItemCreate } from "../../background/database/schema";

function createApi<T1, R>(name: string): (data: T1) => Promise<R>;

function createApi(name: string) {
  return (data: any) => {
    return new Promise((resolve, reject) => {
      ipcRenderer
        .invoke("executeBackgroundAction", name, data)
        .then(([err, data]) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
    });
  };
}

export const giveMeFive = createApi<void, string>("giveMeFive");

export const addOneBill = createApi<BillItemCreate, boolean>("addOneBill");
