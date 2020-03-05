import React from "react";
import { Card } from "@alifd/next";

import * as styles from "./index.scss";

export const BudgetValue: React.FC = () => {
  return (
    <Card free={true} className={styles["budget-value"]}>
      <Card.Content>
        <p className="month-budget">本月预算：2000</p>
        <p className="used">已支出：200</p>
      </Card.Content>
    </Card>
  );
};
