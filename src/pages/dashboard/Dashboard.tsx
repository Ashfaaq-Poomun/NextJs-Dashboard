import React, { useEffect, useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import { RentalTool } from "@/components/Dashboard/RentalTools/RentalTools";
import { MissingItem } from "@/components/Dashboard/MissingItems/MissingItems";
import { RestockItem } from "@/components/Dashboard/RestockItems/RestockItems";

const Dashboard = () => {
  const [RentalTools, setRentalTools] = useState<any>();
  const [MissingItems, setMissingItems] = useState<any>();
  const [RestockItems, setRestockItems] = useState<any>();

  const getCheckedOutRentals = () => {
    const RentalTools = [
      {
        id: "01",
        toolRef: "6465",
        name: "Alex Morgan 🥉",
        status: "Completed",
        duration: "15:00",
      },
      {
        id: "02",
        toolRef: "5665",
        name: "Razib Rahman 🏆",
        status: "In Progress",
        duration: "05:00",
      },
      {
        id: "03",
        toolRef: "1755",
        name: "Luke Norton ⭐️",
        status: "Not Started",
        duration: "15:00",
      },
    ];
    setRentalTools(RentalTools);
  };
  const getMissingItems = () => {
    const MissingItems = [
      {
        toolRef: "6465",
        name: "Alex Morgan 🥉",
      },
      {
        toolRef: "6466",
        name: "Alex Morgan 🥉",
      },
      {
        toolRef: "6467",
        name: "Alex Morgan 🥉",
      },
    ];
    setMissingItems(MissingItems);
  };
  const getItemsToRestock = () => {
    const RestockItems = [
      {
        toolRef: "6465",
        name: "Screws",
        status: "Low",
      },
      {
        toolRef: "6466",
        name: "Wires (electical)",
        status: "None",
      },
      {
        toolRef: "6467",
        name: "Bolts",
        status: "None",
      },
    ];
    setRestockItems(RestockItems);
  };
  useEffect(() => {
    getCheckedOutRentals();
    getMissingItems();
    getItemsToRestock();
  }, []);
  return (
    <Box>
      <Grid xs={12} marginY={2}>
        <RentalTool RentalTools={RentalTools} />
      </Grid>
      <Grid xs={12} marginY={5}>
        <MissingItem MissingItems={MissingItems} />
      </Grid>
      <Grid xs={12} marginY={5}>
        <RestockItem RestockItems={RestockItems} />
      </Grid>
    </Box>
  );
};
export default Dashboard;
