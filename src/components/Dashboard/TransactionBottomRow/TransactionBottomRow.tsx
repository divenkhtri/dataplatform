import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import {
  doughnutChartData1,
  doughnutChartData2,
  doughnutChartData3,
  doughnutChartData4,
} from "@/components/mockData";
import scss from "./TransactionsBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
         <Grid>
          <Paper className={scss.dataCard}>
            <p>State Distribution</p>
            <DataChart type={"pie"} data={doughnutChartData4} />
          </Paper>
        </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Age Distribution</p>
          <DataChart type={"doughnut"} data={doughnutChartData3} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Perferred Language</p>
          <DataChart type={"pie"} data={doughnutChartData2} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
