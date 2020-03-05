import React from "react";
import { BudgetPlot } from "./budget-plot";
import { BudgetValue } from "./budget-value";
import { TotalAssets } from "./total-assets";
import { Box } from "@alifd/next";

import * as styles from "./index.scss";

export const DashboardHeader: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <Box direction="row" justify="space-between">
        <BudgetPlot />
        <BudgetValue />
        <TotalAssets />
      </Box>
    </div>
  );
};
