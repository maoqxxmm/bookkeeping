import React from "react";
import { BudgetCard } from "./budget-card";
import { AccountsCard } from "./accounts";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <BudgetCard />
      <AccountsCard />
    </div>
  );
};
