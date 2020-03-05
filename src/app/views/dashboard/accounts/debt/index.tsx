import React from "react";
import { Card, Table } from "@alifd/next";

export const DebtAccount: React.FC = () => {
  const dataSource = [
    {
      name: "短期负债",
      value: -20000
    },
    {
      name: "长期负债",
      value: -123456
    }
  ];

  return (
    <Card free={true}>
      <Card.Content>
        <Table dataSource={dataSource}>
          <Table.Column title={"账户名称"} dataIndex={"name"} />
          <Table.Column title={"资金"} dataIndex={"value"} />
        </Table>
      </Card.Content>
    </Card>
  );
};
