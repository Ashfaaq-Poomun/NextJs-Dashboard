import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

const Settings = () => {
  const [showRentalTools, setShowRentalTools] = React.useState(true);
  const [showMissingItems, setShowMissingItems] = React.useState(true);
  const [showRestockItems, setShowRestockItems] = React.useState(true);
  const [showWorkOrderStatus, setShowWorkOrderStatus] = React.useState(true);

  const handleShowRentalToolsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRentalTools(event.target.checked);
  };

  const handleShowMissingItemsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowMissingItems(event.target.checked);
  };

  const handleShowRestockItemsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowRestockItems(event.target.checked);
  };

  const handleShowWorkOrderStatusChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowWorkOrderStatus(event.target.checked);
  };

  const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: handle form submission
  };
  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRentalTools}
                        onChange={handleShowRentalToolsChange}
                      />
                    }
                    label="Rental Tools"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showMissingItems}
                        onChange={handleShowMissingItemsChange}
                      />
                    }
                    label="Missing Items"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRestockItems}
                        onChange={handleShowRestockItemsChange}
                      />
                    }
                    label="Restock Items"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showWorkOrderStatus}
                        onChange={handleShowWorkOrderStatusChange}
                      />
                    }
                    label="Work Order Status"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
