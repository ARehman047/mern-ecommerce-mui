import React from "react";
import { Typography, Grid2, Button } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid2 className="bg-black text-white text-center mt-10 py-3">
        <Grid2
          item
          xs={12}
          sm={6}
          md={3}
          direction={"row"}
          container
          sx={{ justifyContent: "space-around" }}
          className="mt-5"
        >
          <div className="flex flex-col">
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
            <Button className="pb-5" variant="h6" gutterbottom>
              About
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Blog
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Jobs
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Press
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Partners
            </Button>
          </div>

          <div className="flex flex-col">
            <Typography className="pb-5" variant="h6">
              Solutions
            </Typography>
            <Button className="pb-5" variant="h6" gutterbottom>
              Marketing
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Analytics
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Commernce
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Insights
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Support
            </Button>
          </div>

          <div className="flex flex-col">
            <Typography className="pb-5" variant="h6">
              Documentation
            </Typography>
            <Button className="pb-5" variant="h6" gutterbottom>
              Guides
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              API Status
            </Button>
          </div>

          <div className="flex flex-col">
            <Typography className="pb-5" variant="h6">
              Legal
            </Typography>
            <Button className="pb-5" variant="h6" gutterbottom>
              Claim
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Privacy
            </Button>
            <Button className="pb-5" variant="h6" gutterbottom>
              Terms
            </Button>
          </div>
        </Grid2>
        <Grid2 className="p-5 m-5">&copy; Aggay ka stuff jo bhi hai</Grid2>
      </Grid2>
    </div>
  );
};

export default Footer;
