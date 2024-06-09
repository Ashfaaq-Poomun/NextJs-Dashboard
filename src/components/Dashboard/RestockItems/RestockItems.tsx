import { TableCustom, TemplateType } from "@/components/Table/Table";
import BuildIcon from "@mui/icons-material/Build";
import scss from "./RestockItems.module.scss";

interface RestockItemsProps {
  RestockItems: any[];
}
export const RestockItem = ({ RestockItems }: RestockItemsProps) => {
  const statusTemplate: TemplateType = (item: string | null) => {
    let color: string = "";
    if (item) {
      color = item.toLocaleLowerCase() === "low" ? "#FFA500" : "#EF4444";
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
      name: "Tool Ref.",
      template: false,
    },
    {
      name: "Tool/Equipment",
      template: true,
    },
    {
      name: "Stock Status",
      template: true,
    },
  ];
  const template = [null, null, statusTemplate];
  return (
    <div className={scss.container}>
      <div>
        <h1>Restock Items</h1>
      </div>
      <TableCustom data={RestockItems} column={column} template={template} />
    </div>
  );
};
