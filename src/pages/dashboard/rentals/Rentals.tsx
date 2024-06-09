import { RentalTool } from "@/components/Dashboard/RentalTools/RentalTools";
import React, { useEffect, useState } from "react";

const Rentals = () => {
  const [RentalTools, setRentalTools] = useState<any>();
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

  useEffect(() => {
    getCheckedOutRentals();
  }, []);
  return <RentalTool RentalTools={RentalTools} />;
};
export default Rentals;
