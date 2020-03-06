import React from "react";
import { BillListHeader } from "./header";
import { Bills } from "./list";

export const BillList: React.FC = () => {
  return (
    <div className="bill-list">
      <BillListHeader />
      <Bills />
    </div>
  );
};
