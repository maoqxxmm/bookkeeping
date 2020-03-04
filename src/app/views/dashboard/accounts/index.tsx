import React from "react";
import { Card, Table } from "@alifd/next";

export const AccountsCard: React.FC = () => {
  const dataSource = [
    {
      name: "现金账户",
      value: 20000
    },
    {
      name: "理财账户",
      value: 123456
    },
    {
      name: "投资账户",
      value: 456789
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
