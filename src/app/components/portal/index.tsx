import React, { useState, useEffect } from "react";
import { Shell, Nav } from "@alifd/next";
import { ipcRenderer } from "electron";

export const Portal: React.FC = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    ipcRenderer
      .invoke("executeBackgroundAction", "giveMeFive")
      .then((res: string) => {
        setName(res);
      });
  }, []);

  return (
    <div className="portal">
      <Shell
        className={"iframe-hack"}
        device={"desktop"}
        style={{ border: "1px solid #eee" }}
      >
        <Shell.Branding>
          <div className="rectangular"></div>
          <span style={{ marginLeft: 10 }}>毛球记账</span>
        </Shell.Branding>
        <Shell.Action>
          <img
            src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            className="avatar"
            alt="用户头像"
          />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </Shell.Action>

        <Shell.Navigation>
          <Nav embeddable aria-label="global navigation">
            <Nav.Item icon="account">Nav Item 1</Nav.Item>
            <Nav.Item icon="calendar">Nav Item 2</Nav.Item>
            <Nav.Item icon="atm">Nav Item 3</Nav.Item>
            <Nav.Item icon="account">Nav Item 4</Nav.Item>
            <Nav.Item icon="account">Nav Item 5</Nav.Item>
            <Nav.Item icon="account">Nav Item 6</Nav.Item>
            <Nav.Item icon="account">Nav Item 7</Nav.Item>
          </Nav>
        </Shell.Navigation>

        <Shell.Content>
          <div style={{ minHeight: 1200, background: "#fff" }}></div>
        </Shell.Content>
      </Shell>
    </div>
  );
};
