import React from "react";
import { Card } from "@alifd/next";

import * as styles from "./index.scss";

export const TotalAssets: React.FC = () => {
  return (
    <Card free={true} className={styles["total-assets"]}>
      <Card.Content>
        <p className="total-assets-value">总资产：2000</p>
        <p className="net-assets-value">净资产：200</p>
      </Card.Content>
    </Card>
  );
};
