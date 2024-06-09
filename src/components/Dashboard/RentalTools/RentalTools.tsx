import { TableCustom, TemplateType } from "@/components/Table/Table";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BuildIcon from "@mui/icons-material/Build";
import scss from "./RentalTools.module.scss";

interface RentalToolsProps {
  RentalTools: any[];
}
export const RentalTool = ({ RentalTools }: RentalToolsProps) => {
  const teamMemberTemplate: TemplateType = (item: string | null) => {
    let color: string = "";
    if (item) {
      color = item.toLocaleLowerCase() === "completed" ? "#34D399" : "#EF4444";
    }
    return (
      <div style={{ display: "flex" }} key={Math.random()}>
        <AccountCircleIcon className={scss.userIcon} key={Math.random()} />
        {item}
      </div>
    );
  };
  const statusTemplate: TemplateType = (item: string | null) => {
    let color: string = "";
    if (item) {
      color =
        item.toLocaleLowerCase() === "completed"
          ? "#34D399"
          : item.toLocaleLowerCase() === "in progress"
            ? "#3B82F6"
            : item.toLocaleLowerCase() === "not started"
              ? "#EF4444"
              : "#000000";
    }
    return (
      <div style={{ display: "flex" }} key={Math.random()}>
        <div className={scss.divCircle} key={Math.random()}>
          <div
            style={{
              backgroundColor: color,
            }}
            className={scss.innerCirlcle}
          ></div>
          <div className={scss.outerCircle}></div>
        </div>
        {item}
      </div>
    );
  };
  const column = [
    {
      name: "Work Order",
      template: true,
    },
    {
      name: "Tool Ref.",
      template: false,
    },
    {
      name: "Team Member",
      template: true,
    },
    {
      name: "Status",
      template: true,
    },
    {
      name: "Duration",
      template: false,
    },
  ];
  const template = [null, null, teamMemberTemplate, statusTemplate, null];
  return (
    <div className={scss.container}>
      <div className={scss.header}>
        <BuildIcon className={scss.icon} />
        <h1>Rental Tools</h1>
      </div>
      <TableCustom data={RentalTools} column={column} template={template} />
    </div>
  );
};
