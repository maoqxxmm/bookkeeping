import React, { useRef, useEffect } from "react";
import { Card } from "@alifd/next";
import { Liquid } from "@antv/g2plot";

import * as styles from "./index.scss";

export const BudgetPlot: React.FC = () => {
  const usedPlot$ = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const liquidPlot = new Liquid(usedPlot$.current, {
      min: 0,
      max: 10000,
      value: 5639,
      width: 200,
      height: 200,
      statistic: {
        formatter: value => ((100 * value) / 10000).toFixed(1) + "%"
      }
    });
    liquidPlot.render();
  }, []);

  return (
    <Card free={true}>
      <Card.Content className={styles["budget-plot-container"]}>
        <div className={styles["used-plot"]} ref={usedPlot$}></div>
      </Card.Content>
    </Card>
  );
};
