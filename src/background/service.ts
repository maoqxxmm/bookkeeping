import { ipcMain, IpcMainInvokeEvent } from "electron";

const handleAction = async (
  event: IpcMainInvokeEvent,
  actionName: string,
  actionData: Record<string, any>
) => {
  switch (actionName) {
    case "giveMeFive":
      return "👏👏👏";
    default:
      return "┑(￣Д ￣)┍";
  }
};

export const initService = () => {
  ipcMain.handle("executeBackgroundAction", handleAction);
};
