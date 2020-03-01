import { ipcMain, IpcMainInvokeEvent } from "electron";
import { billCollection } from "./database/bill";
import { BillItemCreate } from "./database/schema";

const handleAction = async (
  event: IpcMainInvokeEvent,
  actionName: string,
  actionData: Record<string, any>
) => {
  switch (actionName) {
    case "giveMeFive":
      return [null, "👏👏👏"];
    case "addOneBill":
      try {
        const res = await billCollection.addOneBill(
          actionData as BillItemCreate
        );
        return [null, res];
      } catch (err) {
        return [err];
      }
    default:
      return [null, "┑(￣Д ￣)┍"];
  }
};

export const initService = () => {
  ipcMain.handle("executeBackgroundAction", handleAction);
};
