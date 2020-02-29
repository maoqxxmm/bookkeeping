import { app, BrowserWindow } from "electron";
import { initService } from "./service";

const createWindow = () => {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // 加载页面
  win.loadURL("http://localhost:9000");

  // 打开开发者工具
  win.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  // 在 macOs 上，除非用户用 Cmd+Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // 在 macOs 上，当单机 dock 图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

initService();
