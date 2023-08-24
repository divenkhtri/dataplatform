import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import scss from "./TransactionsBottomRow2.module.scss";
import { Accuracy, Completeness, Consistency, Validity } from "@/components/mockData2";

const TransactionBottomRow2 = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Completeness</p>
          <DataChart
            type={"doughnut"}
            data={Completeness}
          />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Validity</p>
          <DataChart type={"doughnut"} data={Validity} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Accuracy</p>
          <DataChart type={"doughnut"} data={Accuracy} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Consistency</p>
          <DataChart type={"doughnut"} data={Consistency} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow2;
