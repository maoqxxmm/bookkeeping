import React from "react";
import { Button, Message } from "@alifd/next";
import { addOneBill } from "app/service";
import { BillCreator } from "app/components/bill-creator";

export const AddBill: React.FC = () => {
  const onAddBill = () => {
    BillCreator.open();
    // addOneBill({
    //   content: "123",
    //   date: new Date().getTime(),
    //   type: 0,
    //   categories: [],
    //   reimbursable: false
    // }).then(res => {
    //   if (res) {
    //     Message.show({
    //       type: "success",
    //       title: "创建成功~"
    //     });
    //   }
    // });
  };

  return <Button onClick={onAddBill}>添加</Button>;
};
