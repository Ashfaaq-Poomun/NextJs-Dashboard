import { TableCustom, TemplateType } from "@/components/Table/Table";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import scss from "./MissingItems.module.scss";

type MissingItems = {
  id: number;
  name: string;
  status: string;
  Desc: string;
};
interface MissingItemsProps {
  MissingItems: MissingItems[];
}
export const MissingItem = ({ MissingItems }: MissingItemsProps) => {
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

  const column = [
    {
      name: "Tool ref.",
      template: true,
    },
    {
      name: "Team Member",
      template: true,
    },
  ];
  const template = [null, teamMemberTemplate];
  return (
    <div className={scss.container}>
      <div className={scss.header}>
        <ReportProblemIcon className={scss.icon} color={`warning`} />
        <h1>Missing Items</h1>
      </div>
      <TableCustom data={MissingItems} column={column} template={template} />
    </div>
  );
};
