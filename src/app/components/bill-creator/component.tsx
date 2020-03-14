import React from "react";
import { Dialog } from "@alifd/next";

interface Props {
  onClose: () => void;
}

export const BillCreatorComponent: React.FC<Props> = props => {
  return (
    <Dialog
      title="记一笔"
      visible={true}
      footer={true}
      closeable={true}
      onClose={props.onClose}
    ></Dialog>
  );
};
