import React from "react";
import { Box } from "@alifd/next";
import { DebtAccount } from "./debt";
import { FundAccount } from "./fund";

import * as styles from "./index.scss";

export const DashboardAccounts: React.FC = () => {
  return (
    <div className={styles["dashboard-accounts"]}>
      <Box direction="row">
        <FundAccount />
        <DebtAccount />
      </Box>
    </div>
  );
};
