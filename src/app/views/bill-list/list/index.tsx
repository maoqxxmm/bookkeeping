import React from "react";
import { BillItemApp } from "background/database/schema";
import { Table } from "@alifd/next";

export const Bills: React.FC = () => {
  const dataSource = [
    {
      _id: "1",
      content: "购物",
      date: new Date().getTime(),
      type: 0,
      categories: [],
      reimbursable: false
    },
    {
      _id: "2",
      content: "购物",
      date: new Date().getTime(),
      type: 0,
      categories: [],
      reimbursable: false
    },
    {
      _id: "3",
      content: "购物",
      date: new Date().getTime(),
      type: 0,
      categories: [],
      reimbursable: false
    },
    {
      _id: "4",
      content: "购物",
      date: new Date().getTime(),
      type: 0,
      categories: [],
      reimbursable: false
    }
  ] as BillItemApp[];

  return (
    <Table dataSource={dataSource}>
      <Table.Column title={"内容"} dataIndex={"content"}></Table.Column>
      <Table.Column title={"时间"} dataIndex={"date"}></Table.Column>
      <Table.Column title={"类型"} dataIndex={"type"}></Table.Column>
    </Table>
  );
};
