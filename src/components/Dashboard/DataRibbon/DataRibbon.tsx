import React from "./index";
import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid gap={2} className={scss.dataRibbon}>
      <Grid>
        <DataCard
          title={"Overall DQ Score"}
          value={"71%"}
          description={"The Quality Score of data"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Column Validated"}
          value={"35,632"}
          description={"The totals of all Data processed"}
        />
      </Grid>

      <Grid>
        <DataCard
          title={"Failed Columns"}
          value={"1,209"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
