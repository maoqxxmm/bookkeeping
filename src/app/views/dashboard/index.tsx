import React from "react";
import { DashboardAccounts } from "./accounts";
import { DashboardHeader } from "./header";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <DashboardAccounts />
    </div>
  );
};
