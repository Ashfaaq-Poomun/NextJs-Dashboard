import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

type ColumType = {
  name: string;
  template: boolean;
};
export type TemplateType = ((item: string | null) => JSX.Element) | null;
interface DataProps {
  data: any[];
  column: ColumType[];
  template: TemplateType[];
}
export const TableCustom = ({ data, column, template }: DataProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {column.map((col, index) => {
            return <TableCell key={index}>{col.name}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.length > 0
          ? data.map((tool, index) => {
              return (
                <TableRow key={index}>
                  {Object.entries(tool).map(([key, value], index) => {
                    return (
                      <TableCell key={Math.random()}>
                        {template[index]
                          ? template[index](tool[key])
                          : tool[key]}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <Button variant={`contained`} color={`info`}>
                      detail
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          : null}
      </TableBody>
    </Table>
  );
};
