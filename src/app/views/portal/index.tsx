import React, { useState, useEffect } from "react";
import { Shell, Nav, Message } from "@alifd/next";
import { giveMeFive, addOneBill } from "../../service";
import { Page } from "./schema";
import { Dashboard } from "../dashboard";
import { BillList } from "../bill-list";

export const Portal: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<Page>(Page.Dashboard);

  useEffect(() => {
    giveMeFive().then((res: string) => {
      setName(res);
    });
  }, []);

  const doAddOneBill = () => {
    addOneBill({
      content: "123",
      date: new Date().getTime(),
      type: 0,
      categories: [],
      reimbursable: false
    }).then(res => {
      if (res) {
        Message.show({
          type: "success",
          title: "创建成功~"
        });
      }
    });
  };

  const getPage = () => {
    switch (page) {
      case Page.Dashboard:
        return <Dashboard />;
      case Page.BillList:
        return <BillList />;
      default:
        return null;
    }
  };

  const onSelectPage = (key: Page) => {
    setPage(key);
  };

  return (
    <div className="portal">
      <Shell
        className={"iframe-hack"}
        device={"desktop"}
        style={{ border: "1px solid #eee" }}
      >
        <Shell.Branding>
          <div className="rectangular"></div>
          <span style={{ marginLeft: 8 }} onClick={doAddOneBill}>
            毛球记账
          </span>
        </Shell.Branding>
        <Shell.Action>
          <span style={{ marginLeft: 10 }}>{name}</span>
        </Shell.Action>

        <Shell.Navigation>
          <Nav
            embeddable
            aria-label="global navigation"
            defaultSelectedKeys={page}
            onItemClick={onSelectPage}
          >
            <Nav.Item key={Page.Dashboard} icon="account">
              概览
            </Nav.Item>
            <Nav.Item key={Page.BillList} icon="calendar">
              明细
            </Nav.Item>
          </Nav>
        </Shell.Navigation>

        <Shell.Content>{getPage()}</Shell.Content>
      </Shell>
    </div>
  );
};
