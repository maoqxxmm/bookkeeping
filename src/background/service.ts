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
      return "👏👏👏";
    case "addBill":
      billCollection.addOneBill(actionData as BillItemCreate);
      return true;
    default:
      return "┑(￣Д ￣)┍";
  }
};

export const initService = () => {
  ipcMain.handle("executeBackgroundAction", handleAction);
};
