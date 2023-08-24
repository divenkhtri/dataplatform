import DataRibbon from "../../../components/Dashboard/DataRibbon";
import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import TransactionsPerDay2 from "@/components/Dashboard/TransactionsPerDay/TransactionsPerDay2";
import TransactionBottomRow2 from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow2";

const datascore = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
      </Grid>
      <TransactionBottomRow2 />
    </Box>
  );
};

export default datascore;
