import React from "react";
import { Button } from "@alifd/next";

export const BillListHeader: React.FC = () => {
  return (
    <div className="range-pick">
      <Button.Group>
        <Button>今日</Button>
        <Button>本周</Button>
        <Button>本月</Button>
      </Button.Group>
    </div>
  );
};
