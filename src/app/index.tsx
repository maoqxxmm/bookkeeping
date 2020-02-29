import * as React from "react";
import * as ReactDOM from "react-dom";
import { Portal } from "./components/portal";

import "./styles/index.scss";

// 等待更好的方案，推荐的 babel-plugin-import 尝试后并无效果
import "@alifd/next/dist/next.min.css";

ReactDOM.render(<Portal />, document.getElementById("root") as HTMLElement);
