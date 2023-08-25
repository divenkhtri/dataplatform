import React from "react";
import scss from "./TransactionsPerDay.module.scss";
import { Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "@/components/DataChart";
import { doughnutChartData1, lineChartData } from "@/components/mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          <Typography>Gender Distribution Per Month</Typography>
          <DataChart type={"bar"} data={lineChartData} />
        </div>
        <Grid className={scss.bottomRow}>
          <Paper className={scss.dataCard}>
            <p>Loyalty Status</p>
            <DataChart type={"doughnut"} data={doughnutChartData1} />
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;
